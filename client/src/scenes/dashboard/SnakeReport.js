import React, { Component, Fragment } from 'react';
import Body from './Body';
import $ from 'jquery';
import BackIcon from './../utilities/BackIcon';
import python from './../../images/python.png';
import Python from './../../images/Python.pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
  };
export class SnakeReport extends Component {
    constructor(props){
        super(props);

        this.state = {
            numPages: 0,
            pageNumber: 1
        }
    }

    onDocumentLoadSuccess = ({ numPages })=> {
        this.setState({
            numPages: numPages
        })
        
      }

      onPageSuccess = () => {
        console.log(  $(".react-pdf__Page").outerHeight())
        $('.snake').animate({
            scrollTop: $(".react-pdf__Page").outerHeight() * this.props.section,
        }, 50)
      }


    render() {
        return (
            <Fragment>
            <div className="background">
                    <img src={python} alt=""/></div>
            <div className="report snake">
            <a onClick={()=>this.props.pageChange("overview", "what")} className="back">
                    <BackIcon />
                    <span>Go back to dashboard</span>
                </a>
            <Document
                options={options}
                file={Python}
                onLoadSuccess={this.onDocumentLoadSuccess}
                >
                     {
                        Array.from(
                            new Array(this.state.numPages),
                            (el, index) => (
                            <Page
                                width={$(".report").outerWidth()}
                                key={`page_${index + 1}`}
                                pageNumber={index + 1}
                                onRenderSuccess={this.onPageSuccess}
                            />
                            ),
                        )
                    }
                </Document>
                <p>Page {this.state.pageNumber} of {this.state.numPages}</p>
            </div>
        </Fragment>
            
        )
    }
}

export default SnakeReport

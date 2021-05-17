import React, { Component, Fragment } from 'react';
import Body from './Body';
import $ from 'jquery';
import BackIcon from './../utilities/BackIcon';
import crocodile from './../../images/crocodile.png';
import Leopard from './../../images/Leopard.pdf';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
  };
export class CrocodileReport extends Component {
    constructor(props){
        super(props);

        this.state = {
            numPages: 0,
            pageNumber: 1
        }
    }
    componentDidMount(){
        // var offset = $(`.leopard #${this.props.section}`).position();
        // console.log($(`.leopard #${this.props.section}`).height())
        

        
    }

    onDocumentLoadSuccess = ({ numPages })=> {
        this.setState({
            numPages: numPages
        })
        
      }

      onPageSuccess = () => {
        console.log(  $(".react-pdf__Page").outerHeight())
        $('.crocodile').animate({
            scrollTop: $(".react-pdf__Page").outerHeight() * this.props.section,
        }, 50)
      }
    render() {
        return (
<Fragment>
                <div className="background">
                        <img src={crocodile} alt=""/></div>
                <div className="report crocodile">
                <a onClick={()=>this.props.pageChange("overview", "what")} className="back">
                    <BackIcon />
                    <span>Go back to dashboard</span>
                </a>
                <Document
                    options={options}
                    file={Leopard}
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

export default CrocodileReport

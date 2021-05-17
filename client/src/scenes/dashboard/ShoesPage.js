import React, { Component, Fragment } from 'react';
import ShoesSection from './ShoesSection';
import BidSection from './BidSection';
import ReviewSection from './ReviewSection';
import $ from 'jquery'
// import { ThemeProvider } from '@material-ui/core';

export class ShoesPage extends Component {
    constructor(props){
        super(props);

        this.state={
            section:"shoes",
            bid: 0
        }
    }
    changeSection = (id) => {
        $(`.nav-bars li`).removeClass("active");
        $(`.nav-bars #${id}`).addClass("active");

        if(id==0)
        {
            this.setState({
                section: "shoes"
            })
        }
        else if(id==1){
            this.setState({
                section: "bid"
            }, ()=> {
                $(`.nav-bars li`).removeClass("active");
                $(`.nav-bars #${id}`).addClass("active");

                $(`.nav-contents .nav-content`).removeClass("active");
                $(`#${id}.nav-content `).addClass("active");
            })
        }
        else if(id==2){
            this.setState({
                section: "review"
            })
            // $(`.nav-bars li`).removeClass("active");
            //     $(`.nav-bars #${id}`).addClass("active");

            //     $(`.nav-contents .nav-content`).removeClass("active");
            //     $(`#${id}.nav-content `).addClass("active");
        }

        $(`.nav-contents .nav-content`).removeClass("active");
        $(`#${id}.nav-content `).addClass("active");
    }

    bid = (val) =>{
        this.setState({
            bid: val
        })
    }

    render() {
        return (
            <div className="shoes-page">
                <div className="background"></div>
                <ul className="nav-bars">
                    {
                        this.state.section == "shoes"?
                        <Fragment>
                            <li onClick={() => this.changeSection(0)} className="active" id="0"><a><span>1</span>{this.props.answer}</a></li>
                           
                        </Fragment>:
                        this.state.section == "bid"?
                            <Fragment>
                                <li onClick={() => this.changeSection(0)} className="active" id="0"><a><span>1</span>{this.props.answer}</a></li>
                                <li onClick={() => this.changeSection(1)} id="1"><a><span>2</span>Place Your Bid</a></li>
                            </Fragment>:
                        this.state.section == "review"?
                            <Fragment>
                                <li onClick={() => this.changeSection(0)}  id="0"><a><span>1</span>{this.props.answer}</a></li>
                                <li onClick={() => this.changeSection(1)} id="1"><a><span>2</span>Place Your Bid</a></li>
                                <li onClick={() => this.changeSection(2)} className="active" id="2"><a><span>3</span>Review And Checkout</a></li>
                            </Fragment>
                        : null                    }
                    
                </ul>
                <div className="nav-contents">
                    {
                        this.state.section == "shoes"?
                            <div id="0" className="nav-content active">
                                <ShoesSection pageChange={this.props.pageChange} changeSection={this.changeSection} addVariantToCart={this.props.addVariantToCart} answer={this.props.answer} products={this.props.products} />
                            </div>
                        : this.state.section == "bid"?
                            <Fragment>
                                <div id="0" className="nav-content active">
                                    <ShoesSection pageChange={this.props.pageChange} changeSection={this.changeSection} addVariantToCart={this.props.addVariantToCart} answer={this.props.answer} products={this.props.products} />
                                </div>
                                 <div id="1" className="nav-content">
                                    <BidSection bid={this.bid} answer={this.props.answer} changeSection={this.changeSection} pageChange={this.props.pageChange} />
                                </div>
                            </Fragment>
                        : this.state.section == "review"?
                            <Fragment>
                                <div id="0" className="nav-content ">
                                    <ShoesSection pageChange={this.props.pageChange} changeSection={this.changeSection} addVariantToCart={this.props.addVariantToCart} answer={this.props.answer} products={this.props.products} />
                                </div>
                                <div id="1" className="nav-content">
                                    <BidSection products={this.props.products} changeSection={this.changeSection} pageChange={this.props.pageChange} answer={this.props.answer} />
                                </div>
                                <div id="2" className="nav-content active">
                                    <ReviewSection answer={this.props.answer} products={this.props.products} bid={this.state.bid} changeSection={this.changeSection} pageChange={this.props.pageChange} />
                                </div>
                            </Fragment>
                            : null
                    }
                    

                    {/* <div id="1" className="nav-content">
                        <BidSection />
                    </div>

                    <div id="2" className="nav-content ">
                        <ReviewSection />
                    </div> */}
                </div>
            </div>
        )
    }
}

export default ShoesPage

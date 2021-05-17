import React, { Component, Fragment } from 'react';
import Body from './Body';
import $ from 'jquery';
import BackIcon from './../utilities/BackIcon';
import python from './../../images/python.png';

export class SnakeReport extends Component {
    componentDidMount(){
        var offset = $(`.snake #${this.props.section}`).position();
        console.log($(`.snake #${this.props.section}`).height())
        $('.snake').animate({
            scrollTop: offset.top,
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
                <h3 id="what">You are a Coiled Python</h3>
                <h4>What this means?</h4>
                <p>Within the context of this ancient African worldview the Coiled Python represents great intuition, wisdom, and a
heightened state of preparedness. 
                    </p>
                <p>
                The ancient pictograph of the Coiled Python is a snake with a particularly curled tail and winding body. The archetype is
coiled as a symbol of animal’s predatory crushing power which is depicted in multiple loops of its legless form. However,
the ideographic representation of these loops also echo the cyclical nature of life where nothing is permanent and
everything that goes up must eventually come back down and vice versa.

                </p>

                {/* <h4 id="historical">Historical background and cultural context</h4> */}
                <p>
                People with this personality trait are careful, hyper-intuitive, and very sympathetic to the plight of others. However they
are often extremely materialistic and self-absorbed. They may also be discreet to a fault and can be very secretive.
Nonetheless, they tend to be popular with a personality that easily attracts others. Their ease with popularity also lends
them easily to many leadership roles in their social circles. However, their discretion and secrecy often make them seem
cold and aloof when in fact they are sympathetic at heart. 
                </p>
                <p>
                The main trait of this personality type is an attuned sense of intuition which can present itself as wisdom beyond their
years. As a result of this intuition Pythons tend to be deep thinkers who are perceptive and skeptical about everything.
                </p>
                <p>
                Pythons are notorious for their calm and caution. Being very thorough, they can always carry out a plan from the
beginning to the end. However, this sometimes means that they shy away from risks and can become daunted by
unforeseen challenges. 
                </p>
                <p>
                Because Pythons are very materialistic they may also be greedy and have difficulty setting limits on their desires. Their
materialism, popularity and caution combine such that they are often conventional in their outlook and approach and
therefore and upholders of the status quo and tradition. 
                </p>

                <h4 id="historical">African context</h4>
                <p>
                These animals were deeply admired for their incredible size, beautiful skins and raw strength but also greatly feared for
their ability to camouflage into their environment s and perceived risks to human life. 
                </p>
                <p>
                Pythons coil around their prey and suffocate them to death after which they swallow tem whole. Although they tend to
target smaller animals such as cats or rabbits, they sheer size of pythons induce panic in the human imagination. 
                </p>
                <p>
                Their beautiful skins were often worn as a mystical charms , while their meats were eaten as an expensive delicacy and
their organs often used as medicinal ingredients with perceived mystical healing power.
                </p>
                <h4 id="strengths">Overview of strengths and weaknesses</h4>
                <ul>
                    <li>Intuitive and wise but very conventional in their thinking</li>
                    <li>Careful, discreet and cautious to the point of risk aversion and proneness for anxiety</li>
                    <li>Introverted, shy and secretive but also popular</li>
                    <li>Highly prepared but easily daunted by unforeseen setbacks</li>
                    <li>Self-absorbed, materialistic and often greedy but also extremely sympathetic to the plight of others</li>
                    <li>Avoids confrontation but is very calculating and often perceived as cold</li>
                    <li>Inconsistent but also practical</li>
                </ul>

                {/* <h3>
                    Leopard Shoe Design
                </h3> */}
                <h4 id="product">Product-personality matrix</h4>
                <p>
                Within the context of this ancient African worldview the Coiled Python represents great intuition, wisdom, and a
heightened state of preparedness. 
                </p>
                <p>
                People with this personality trait are careful, hyper-intuitive, and very sympathetic to the plight of others. However they
are often extremely materialistic and self-absorbed. They may also be discreet to a fault and can be very secretive.
Nonetheless, they tend to be popular with a personality that easily attracts others. Their ease with popularity also lends
them easily to many leadership roles in their social circles. However, their discretion and secrecy often make them seem
cold and aloof when in fact they are sympathetic at heart. 
                </p>
                <p>
                Wearing these shoes provide physical reminder of your distinct personality traits with an ancient African historical context
and operate as a psychological cue to understanding your unique strengths and limitations as you walk your personal
defy odds journey to realize your particular destiny. 
                </p>

                <h4 id="shoes">Product description</h4> 
                 <Body answer={"Leopard"} products={this.props.products} change={this.change} />
            </div>
            </Fragment>
        )
    }
}

export default SnakeReport

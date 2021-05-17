import React, { Component } from 'react';
import Body from './Body';
import $ from 'jquery';
import BackIcon from './../utilities/BackIcon';

export class Second extends Component {
    componentDidMount(){
        var offset = $(`#${this.props.section}`).position();
        console.log($(`#${this.props.section}`).height())
        $('.second').animate({
            scrollTop: offset.top,
        }, 50)
    }
    render() {
        return (
            <div className="second">
                <a onClick={()=>this.props.pageChange("overview", "what")} className="back">
                    <BackIcon />
                    <span>Go back to dashboard</span>
                </a>
                <h3 id="what">You are a Leopard</h3>
                <h4>What this means?</h4>
                <p>Within the context of this African worldview the Leopard is the apex symbol in many areas representing a fluidity between all other archetypes.
This is why the smiling Leopard takes on a human face. The Leopard is the chief symbol for great strength, stealth, and vision. 
                    </p>
                <p>
                People with this personality trait are courageous, hyper-competitive, and keenly perceptive. However they are often recklessly destructive and
arrogant. They may also do things in a high-handed manner and can end up inadvertently alienating themselves from people including people
who’s support them may need.
                </p>

                {/* <h4 id="historical">Historical background and cultural context</h4> */}
                <p>
                The main trait of this personality type is courage. As a result of this courage Leopards tend to be supremely confident and adventurous never
shying away from risks or challenges. This also lends them easily to many leadership roles in their professional and social circles. However, it
also makes them very susceptible to over-confidence, recklessness and arrogance. 
                </p>
                <p>
                Leopards are notorious for under-preparation which is reinforced by their incredible ability to overcome unforeseen challenges but in rare
occasions is unsurprisingly the source of their failures. 
                </p>
                <p>
                Because Leopards are independent minded they are often trail blazers and are unafraid of trying new and unconventional things. But this means
they also have a strong inner life which can predispose them to value solitariness and a deep need to be alone sometimes. Inability to feed these
urges can lead to irritability, stand-offishness and even aggression.
                </p>
                <p>
                Leopards are natural born leaders with an impulse for initiative, easily adaptable to changing conditions and creatures of habit and great secrecy.
                </p>

                <h4 id="historical">African context</h4>
                <p>
                Within the African culture that the archetype of the Leopard evolved these animals were intensely admired for their power and strength but also
feared and hated for their man-eating tendencies.
                </p>
                <p>
                Nocturnal animals, leopards operate with stealth and a night vision that make them a dangerous predator of human livestock and formidable foe
that may attack human themselves. 
                </p>
                <p>
                Their beautiful coats were often worn as a symbol of the courage of hunters who would’ve tracked them down but were also believed to retain a
mystical power of such fascinating creature. Some secret societies were modeled under this belief system and they sustain until today.
                </p>
                <h4 id="strengths">Overview of strengths and weaknesses</h4>
                <ul>
                    <li>Courageous but reckless</li>
                    <li>Original but rigid</li>
                    <li>Introverted but also extroverted</li>
                    <li>Confrontational but also caring</li>
                    <li>Open but also secretive</li>
                    <li>Trailblazers but also loners</li>
                </ul>

                {/* <h3>
                    Leopard Shoe Design
                </h3> */}
                <h4 id="product">Product-personality matrix</h4>
                <p>
                    Within the context of this African worldview the Leopard is the apex archetype in many areas representing a fluidity
                    between all others. Nonetheless, the Leopard is the chief symbol for great strength, stealth, and independence.
                </p>
                <p>
                    People with this personality trait are courageous, hyper-competitive, and keenly perceptive. However they are often
                    recklessly destructive and arrogant. They may also do things in a high-handed manner and can end up inadvertently
                    alienating themselves from people including people who’s support them may need.
                </p>
                <p>
                    Wearing these shoes provide physical reminder of your distinct personality traits with an ancient African historical context
                    and operate as a psychological cue to understanding your unique strengths and limitations as you walk your personal
                    defy odds journey to realize your particular destiny.
                </p>

                <h4 id="shoes">Product description</h4> 
                 <Body answer={"Leopard"} products={this.props.products} change={this.change} />
            </div>
        )
    }
}

export default Second

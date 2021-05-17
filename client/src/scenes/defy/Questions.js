import React, { Component, Fragment } from 'react';
import firebase from './../../services/firebase';
import Overlay from './../_layout/Overlay';
import AfricanMask from './../utilities/AfricanMask';
import mask from './africanmask';
import PowerLogo from './../utilities/PowerLogo';
import CustomAlert from './../../utlilities/CustomAlert';
import $, { get } from 'jquery';
const questions_ref = firebase.firestore().collection("questions");
const options_ref = firebase.firestore().collection("options");
const answers_ref = firebase.firestore().collection("answers");
const user_ref = firebase.firestore().collection("users");

export class Questions extends Component {
    constructor(props) {
        super(props);
        this.indexes = Array.from(Array(25).keys());
        this.indexes = this.shuffle(this.indexes);
        // console.log(this.indexes)
        // console.log(this.indexes)
        this.state = {
            selectedOption: "",
            id: 0,
            questions: [],
            options: [],
            options_array: [],
            indexes: [],
            loading: false,
            text_lines: [],
            lines: [],
            initials: "",
            customAlert: false,
            result: ""
        }
    }

    shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    enterAnswer = (e) => {
        console.log(e.code);
        if (this.state.selectedOption != "") {
            if (e.code == "Enter") {
                if (this.state.id == 24)
                    this.finalAnswer();
                else if (this.state.id < 25)
                    this.nextQuestion();
            }
        }
    }

    componentDidMount() {
        document.addEventListener('keypress', this.enterAnswer);
        const t = this;

        t.setState({
            loading: true
        })
        user_ref.where("user", "==", firebase.auth().currentUser.uid)
        .get()
        .then(query=> {
            query.forEach((doc)=>{
                const { first_name, last_name} = doc.data();
                t.setState({
                    initials: first_name
                });
            })
        })
        var questions_list = [];
        questions_ref
            .get()
            .then((query) => {
                query.forEach((doc) => {
                    const { title } = doc.data();
                    questions_list.push({
                        id: doc.id,
                        title: title
                    })
                    // console.log("ss")
                })
                // questions_list = this.shuffle(questions_list)
                t.setState({
                    questions: questions_list
                })
            })

        var options_list = [];
        options_ref

            .get()
            .then((query) => {
                query.forEach((doc) => {
                    const { a, b, c, question } = doc.data();
                    options_list.push({
                        id: doc.id,
                        a: a,
                        b: b,
                        c: c,
                        question: question
                    })
                    // console.log("ss")
                })

                t.setState({
                    options: options_list,

                }, () => {
                    var types = ["Leopard", "Crocodile", "Snake"];
                    var options = [Object(this.state.options[this.indexes[this.state.id]]).a, Object(this.state.options[this.indexes[this.state.id]]).b, Object(this.state.options[this.indexes[this.state.id]]).c]
                    var indexes = [0, 1, 2];
                    indexes = this.shuffle(indexes);
                    this.setState({
                        options_array: options,
                        indexes: indexes,
                    }, () => {
                        t.setState({
                            loading: false
                        })
                    })

                    var types = ["Leopard", "Crocodile", "Snake"];
                    // console.log(Object(this.state.questions[this.indexes[this.state.id]]).title)
                    var question_list = String(Object(this.state.questions[this.indexes[this.state.id]]).title).split(",");
                    var first = "";
                    var second = "";
                    var third = "";
                    // console.log(String(Object(this.state.questions[this.indexes[this.state.id]]).title))
                    if (String(Object(this.state.questions[this.indexes[this.state.id]]).title) == "III, I, II?") {
                        first = String(question_list[0]).replace(" ", "")
                        second = String(question_list[1]).split(" or ")[0].replace(" ", "").replace(" ", "")
                        third = String(question_list[2]).replace("?", "")
                        // alert(String(question_list[2]).replace("?", ""))
                    }
                    else {
                        first = String(question_list[0]).replace(" ", "").toLowerCase()
                        second = String(question_list[1]).split(" or ")[0].replace(" ", "").toLowerCase().replace(" ", "")
                        third = String(String(String(String(String(question_list[1]).split(" or ")[1]).replace(" ", ""))).toLowerCase()).replace("?", "")
                    }

                    var questions = [];
                    questions.push(first);
                    // console.log(this.state.id)
                    questions.push(second);
                    questions.push(third);

                    setTimeout(() => {
                        var adiv = `<div class="question-line">
                            <div class="oracle-tag">${mask}</div>
                            
                            <div class="oracle-text">
                                <div class="arrow"></div>
                                <p>Welcome. I am your Oracle. I am the very first of my kind in an evolving state of the art innovation to scientifically mine out personality paradigms from ancient African belief systems. 
                                </p>
                            </div>
                        </div>`
                        var arr = this.state.lines;
                        arr.push(adiv)
                        // console.log(arr)
                        $("#questions_texts").append(adiv);
                        $("#questions_texts").animate({
                            scrollTop: $("#questions_texts").innerHeight() + 400 * t.state.id
                        })
                    }, 200)

                    setTimeout(() => {
                        var adiv = `<div class="question-line">
                            <div class="oracle-tag">${mask}</div>
                            
                            <div class="oracle-text">
                                <div class="arrow"></div>
                                <p>Today I will guide you through a series of proprietary psychometric questions designed to unmask your personality traits within the context of an ancient African ethos. Click <a class="defy-learn-more">here</a> if you’d like to learn more about our proprietary psychometric test  and a civilization that inspired Wakanda.</p>
                            </div>
                        </div>`
                        var arr = this.state.lines;
                        arr.push(adiv)
                        // console.log(arr)
                        $("#questions_texts").append(adiv);
                        $("#questions_texts").animate({
                            scrollTop: $("#questions_texts").innerHeight() + 400 * t.state.id
                        })
                        $(`.defy-learn-more`).on('click', (e) => {
                            t.learnMore()
                        })
                    }, 800)

                    

                    setTimeout(() => {
                        var adiv = `<div class="question-line">
                            <div class="oracle-tag">${mask}</div>
                            
                            <div class="oracle-text">
                                <div class="arrow"></div>
                                <p>There are no right or wrong answers. But try to answer each question as fast as possible choosing the best possible instinctive answer to you. If you’re ready to get started, launch the consultation <a class="start-consultation">here.</a></p>
                            </div>
                        </div>`;
                        var arr = this.state.lines;
                        arr.push(adiv)
                        // console.log(arr)
                        $("#questions_texts").append(adiv);
                        $("#questions_texts").animate({
                            scrollTop: $("#questions_texts").innerHeight() + 400 * t.state.id
                        })

                        $(`.start-consultation`).on('click', (e) => {
                            t.startConsultation()
                        })
                    }, 2000)
                })
            })
    }

    closeAlert = () => {
        const t = this;
        this.setState({
            customAlert: false
        },()=> {
            t.props.history.history.push({
                pathname: "/dashboard", state: {
                    answer: this.state.result
                }
            })
        }
        )
       
    }

    learnMore = () => {
        this.props.change("defy-learn-more");
    }

    startConsultation = () =>{
        const t = this;
        var types = ["Leopard", "Crocodile", "Snake"];
                    
        var question_list = String(Object(this.state.questions[this.indexes[this.state.id]]).title).split(",");
        var first = "";
        var second = "";
        var third = "";
        if (String(Object(this.state.questions[this.indexes[this.state.id]]).title) == "III, I, II?") {
            first = String(question_list[0]).replace(" ", "")
            second = String(question_list[1]).split(" or ")[0].replace(" ", "").replace(" ", "")
            third = String(question_list[2]).replace("?", "") 
        }
        else {
            first = String(question_list[0]).replace(" ", "").toLowerCase()
            second = String(question_list[1]).split(" or ")[0].replace(" ", "").toLowerCase().replace(" ", "")
            third = String(String(String(String(String(question_list[1]).split(" or ")[1]).replace(" ", ""))).toLowerCase()).replace("?", "")
        }

        var questions = [];
        questions.push(first);            
        questions.push(second);
        questions.push(third);

        setTimeout(() => {
            var txt = "";
            if (String(Object(this.state.questions[this.indexes[this.state.id]]).title) == "III, I, II?") {
                txt = `${String(questions[this.state.indexes[0]]).toUpperCase()},
                                    ${String(questions[this.state.indexes[1]]).toUpperCase()} or 
                                    ${String(questions[this.state.indexes[2]]).toUpperCase()}?`;
            }
            else {
                txt = `${String(questions[this.state.indexes[0]])[0].toUpperCase()}${String(questions[this.state.indexes[0]]).substring(1)},
                                    ${String(questions[this.state.indexes[1]]).toLowerCase()} or 
                                    ${String(questions[this.state.indexes[2]]).toLowerCase()}?`;
            }
            const length = txt.length;
            var div = `<div class="question-line" id="${this.state.id}">
                <div class="oracle-tag">${mask}</div>
                <div class="oracle-text">
                    <div class="arrow"></div>
                    <p>Choose one:</p>
                    <h4 id="question_text"></h4>
                </div>
            </div>`

            $("#questions_texts").append(div);
            $("#questions_texts").animate({
                scrollTop: $("#questions_texts").innerHeight() + 400 * t.state.id
            })
            var i = 0;
            setTimeout(function loop() {
                // console.log(txt.substring(0, i++))
                $(`#${t.state.id}`).find("#question_text").html(txt.substring(0, i++));
                // ////////////////////////////
                if (i >= length + 1) {
                    return;
                }
                setTimeout(loop, 20);
            }, 10);
            var arr = this.state.lines;
            arr.push(div)
        }, 600)

        setTimeout(() => {
            var answer = `<div class="answer-line" id="${this.state.id}">   
                            <div class="answer-text">
                                <div class="arrow"></div>
                                <ul>
                                    <label class="check-container one"><p id="option-one"></p>
                                       <input type="hidden" value=${types[this.state.indexes[0]]} />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="check-container two"><p id="option-two"></p>
                                    <input type="hidden" value=${types[this.state.indexes[1]]} />
                                        <span class="checkmark"></span>
                                    </label>
                                    <label class="check-container three"><p id="option-three"></p>
                                    <input type="hidden" value=${types[this.state.indexes[2]]} />
                                        <span class="checkmark"></span>
                                    </label>
                                </ul>
                            </div>
                            <div class="oracle-tag">${this.state.initials}</div>
                        </div>`;//
            $("#questions_texts").append(answer);
            $("#questions_texts").animate({
                scrollTop: $("#questions_texts").innerHeight() + 400 * t.state.id
            })
            $(`#${this.state.id}.answer-line .answer-text ul .check-container`).on('click', (e) => {
                // e.preventDefault();
                t.onValueChange(e);
            })

            
                Object(document.getElementById("option-one")).innerHTML = this.state.options_array[this.state.indexes[0]]
                Object(document.getElementById("option-two")).innerHTML = this.state.options_array[this.state.indexes[1]]
                Object(document.getElementById("option-three")).innerHTML = this.state.options_array[this.state.indexes[2]]
        }, 3500)
    }

    nextQuestion = () => {
        const t = this;
        // this.setState({
        //     loading: true
        // })
        var sdiv = `<div class="question-line bubbles">
                        <div class="oracle-tag">${mask}</div>
                        
                        <div class="oracle-text">
                            <div id="breathing-bubble1"></div>
                            <div id="breathing-bubble2"></div>
                            <div id="breathing-bubble3"></div>
                        </div>
                    </div>`;
        $("#questions_texts").append(sdiv);
        $("#questions_texts").animate({
            scrollTop: $("#questions_texts").innerHeight() + 400 * t.state.id
        })
        answers_ref.add({
            id: String(t.state.id),
            user: firebase.auth().currentUser.uid,
            question: this.state.questions[this.state.id],
            answer: this.state.selectedOption,
        }).then(() => {

            this.setState({
                id: this.state.id + 1,

                selectedOption: ""
            }, () => {

                var types = ["Leopard", "Crocodile", "Snake"];
                var options = [Object(this.state.options[this.indexes[this.state.id]]).a, Object(this.state.options[this.indexes[this.state.id]]).b, Object(this.state.options[this.indexes[this.state.id]]).c]
                var indexes = [0, 1, 2];
                indexes = this.shuffle(indexes);
                this.setState({
                    options_array: options,
                    indexes: indexes,
                    loading: false
                })
                // $("#question_text").text("");

                var types = ["Leopard", "Crocodile", "Snake"];
                // console.log(Object(this.state.questions[this.indexes[this.state.id]]).title)
                var question_list = String(Object(this.state.questions[this.indexes[this.state.id]]).title).split(",");
                var first = "";
                var second = "";
                var third = "";
                // console.log(String(Object(this.state.questions[this.indexes[this.state.id]]).title))
                if (String(Object(this.state.questions[this.indexes[this.state.id]]).title) == "III, I, II?") {

                    var first = String(question_list[0]).replace(" ", "")
                    // alert(first);
                    var second = String(question_list[1]).split(" or ")[0].replace(" ", "").replace(" ", "");
                    // alert(String(question_list[1]).split(" or ")[0].replace(" ", ""))
                    third = String(question_list[2]).replace("?", "")
                    // alert(String(question_list[2]).replace("?", ""))
                }
                else {
                    var first = String(question_list[0]).replace(" ", "").toLowerCase()
                    var second = String(question_list[1]).split(" or ")[0].replace(" ", "").toLowerCase().replace(" ", "")
                    var third = String(String(String(String(String(question_list[1]).split(" or ")[1]).replace(" ", ""))).toLowerCase()).replace("?", "")
                }

                var questions = [];
                questions.push(first);
                // console.log(this.state.id)
                questions.push(second);
                questions.push(third);
                setTimeout(() => {
                    $(".bubbles").remove();
                }, 500)
                $("#questions_texts").animate({
                    scrollTop: $("#questions_texts").innerHeight() + 400 * t.state.id
                })


                setTimeout(() => {
                    var txt = `${String(questions[this.state.indexes[0]])[0].toUpperCase()}${String(questions[this.state.indexes[0]]).substring(1)},
                                         ${String(questions[this.state.indexes[1]]).toLowerCase()} or 
                                         ${String(questions[this.state.indexes[2]]).toLowerCase()}?`;
                    const length = txt.length;
                    var div = `<div class="question-line" id="${this.state.id}">
                        <div class="oracle-tag">${mask}</div>
                        <div class="oracle-text">
                            <div class="arrow"></div>
                            <p>Choose one:</p>
                            <h4 id="question_text"></h4>
                        </div>
                    </div>`

                    $("#questions_texts").append(div);
                    $("#questions_texts").animate({
                        scrollTop: $("#questions_texts").innerHeight() + 400 * t.state.id
                    })
                    var i = 0;
                    setTimeout(function loop() {
                        // console.log(txt.substring(0, i++))
                        // Object(document.getElementById("question_text")).innerHTML = txt.substring(0, i++);
                        $(`#${t.state.id}`).find("#question_text").html(txt.substring(0, i++));
                        // ////////////////////////////
                        if (i >= length + 1) {
                            return;
                        }
                        setTimeout(loop, 20);
                    }, 10);
                }, 1100)

                setTimeout(() => {
                    var answer = `<div class="answer-line" id="${this.state.id}">
                                        
                                            
                                        <div class="answer-text">
                                            <div class="arrow"></div>
                                            
                                            <ul>
                                                <label class="check-container one"><p id="option-one"></p>
                                                   <input type="hidden" value=${types[this.state.indexes[0]]} />
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="check-container two"><p id="option-two"></p>
                                                <input type="hidden" value=${types[this.state.indexes[1]]} />
                                                    <span class="checkmark"></span>
                                                </label>
                                                <label class="check-container three"><p id="option-three"></p>
                                                <input type="hidden" value=${types[this.state.indexes[2]]} />
                                                    <span class="checkmark"></span>
                                                </label>
                                                
                                            </ul>
                                        </div>
                                        <div class="oracle-tag">${this.state.initials}</div>
                                    </div>`;
                    $("#questions_texts").append(answer);
                    $("#questions_texts").animate({
                        scrollTop: $("#questions_texts").innerHeight() + 400 * t.state.id
                    })

                    $(`#${this.state.id}.answer-line .answer-text ul .check-container`).on('click', (e) => {
                        // e.preventDefault();
                        t.onValueChange(e);
                    })


                    // setTimeout(() => {
                        // ${t.state.id}
                        // console.log($(`#${t.state.id}.answer-line`))
                        $(`#${t.state.id}.answer-line`).find(".answer-text").find("ul").find("#option-one").html(this.state.options_array[this.state.indexes[0]])
                        $(`#${t.state.id}.answer-line`).find(".answer-text").find("ul").find("#option-two").html(this.state.options_array[this.state.indexes[1]])
                        $(`#${t.state.id}.answer-line`).find(".answer-text").find("ul").find("#option-three").html(this.state.options_array[this.state.indexes[2]])
                    // }, 500)
                    $("#questions_texts").animate({
                        scrollTop: $("#questions_texts").innerHeight() + 400 * t.state.id
                    })

                    // var arr = this.state.lines;
                    // arr.push(answer)
                    // console.log(arr)
                    // t.setState({
                    //     lines: arr
                    // }, () => {
                    //     Object(document.getElementById("option-one")).innerHTML = this.state.options_array[this.state.indexes[0]]
                    //     Object(document.getElementById("option-two")).innerHTML = this.state.options_array[this.state.indexes[1]]
                    //     Object(document.getElementById("option-three")).innerHTML = this.state.options_array[this.state.indexes[2]]
                    // })

                }, 3500)

            })
        })


    }

    finalAnswer = () => {
        const list = [];
        const t = this;
        this.setState({
            loading: true
        })
        answers_ref.add({
            id: String(t.state.id),
            user: firebase.auth().currentUser.uid,
            question: this.state.questions[this.state.id],
            answer: this.state.selectedOption,
        }).then(() => {
            answers_ref.get()
                .then(query => {
                    var a = 0;
                    var b = 0;
                    var c = 0;
                    query.forEach((doc) => {
                        const { answer, user } = doc.data();
                        if(user == firebase.auth().currentUser.uid)
                            list.push({
                                answer: answer
                            })
                    })
                    console.log(list)



                    // var counts = {};

                    // console.log(counts)

                    list.forEach((x, i) => {
                        if (x.answer == "Leopard") {
                            a = a + 1;
                        }
                        else if (x.answer == "Crocodile") {
                            b = b + 1
                        }
                        else {
                            c = c + 1
                        }
                    })

                    console.log(b);
                    console.log(c);
                    console.log(a);
                    var answer = ""

                    if (a > b && a > c) {
                        // alert("You are a Laughing Leopard")
                        answer = "Laughing Leopard"
                    }
                    else if (b > a && b > c) {
                        // alert("You are a Hidden Crocodile")
                        answer = "Hidden Crocodile"
                    }
                    else {
                        // alert("You are a Coiled Python")
                        answer = "Coiled Python"
                    }

                    t.setState({
                        loading: false
                    })

                    answers_ref.get()
                        .then(query => {
                            var a = 0;
                            var b = 0;
                            var c = 0;
                            query.forEach((doc) => {
                                const {user} = doc.data();
                                if( user == firebase.auth().currentUser.uid)
                                    answers_ref.doc(doc.id)
                                        .delete()
                            })
                            user_ref.where("user", "==", firebase.auth().currentUser.uid)
                                .get()
                                .then(query=> {
                                    query.forEach((doc)=> {
                                        user_ref.doc(doc.id)
                                        .update({
                                            answer: answer
                                        })
                                    })
                                    t.setState({
                                        result: answer,
                                        customAlert: true
                                    })
                                })
                                
                            console.log(answer)
                            
                        })
                })
        })

    }

    oldValueChange = (i, event) => {
        console.log($(event.target).parent().find("input").val())
        const t = this;
        var types = ["Leopard", "Crocodile", "Snake"];
        if ($(event.target).parent().find("input").val() === types[this.state.indexes[0]]) {
            console.log($(event.target).parent());
            $(`#${i}.answer-line .check-container`).removeClass("active");
            $(event.target).parent().addClass("active");
            console.log($(event.target).parent().parent().parent().parent())
            t.oldAnswer(i, $(event.target).parent().find("input").val())

        } else if ($(event.target).parent().find("input").val() === types[this.state.indexes[1]]) {
            console.log("tt");
            $(`#${i}.answer-line .check-container`).removeClass("active");
            $(event.target).parent().addClass("active");
            console.log($(event.target).parent().parent().parent().parent())
            t.oldAnswer(i, $(event.target).parent().find("input").val())
        } else if ($(event.target).parent().find("input").val() === types[this.state.indexes[2]]) {
            console.log("sssh")
            $(`#${i}.answer-line .check-container`).removeClass("active");
            $(event.target).parent().addClass("active");
            console.log($(event.target).parent().parent().parent().parent())
            t.oldAnswer(i, $(event.target).parent().find("input").val())
        }
    }

    oldAnswer = (i, value) => {
        answers_ref.doc(i)
            .update({
                answer: value
            })
    }

    onValueChange = (event) => {
        console.log($(event.target).parent().find("input").val())
        const t = this;
        var types = ["Leopard", "Crocodile", "Snake"];
        if ($(event.target).parent().find("input").val() === types[this.state.indexes[0]]) {
            console.log($(event.target).parent());
            $(".check-container").removeClass("active");
            $(event.target).parent().addClass("active");


        } else if ($(event.target).parent().find("input").val() === types[this.state.indexes[1]]) {
            console.log("tt");
            $(".check-container").removeClass("active");
            $(event.target).parent().addClass("active");


        } else if ($(event.target).parent().find("input").val() === types[this.state.indexes[2]]) {
            console.log("sssh")
            $(".check-container").removeClass("active");
            $(event.target).parent().addClass("active");

        }

        console.log($(`#${this.state.id}.answer-line .answer-text ul .check-container`))
        $(`#${this.state.id}.answer-line .answer-text ul .check-container`)
            .off("click")


        $(`#${this.state.id}.answer-line .answer-text ul .check-container`).on('click', (e) => {
            // e.preventDefault();
            console.log($(e.target).parent().parent().parent().parent().attr("id"))
            t.oldValueChange($(e.target).parent().parent().parent().parent().attr("id"), e)
        })

        this.setState({
            selectedOption: $(event.target).parent().find("input").val()
        }, function () {
            if (t.state.id == 24) {
                t.finalAnswer()
            }
            else {
                t.nextQuestion()
            }
        });
    }

    render() {
        var types = ["Leopard", "Crocodile", "Snake"];
        // var div = <div>jjjjj</div>
        // console.log(Object(this.state.questions[this.indexes[this.state.id]]).title)

        return (<Fragment>
            {
                this.state.customAlert ? <CustomAlert closePopup={this.closeAlert}>
                                    <h4>You are a {this.state.result=="Leopard"?"Laughing Leopard": this.state.result=="Snake"?"Coiled Python":this.state.result=="Crocodile"?"Hidden Crocodile": null}</h4>
                                </CustomAlert>: null
            }
            <div className="questions">
                <Overlay loading={this.state.loading} />
                
                <div className="wrapper">
                    <div className="inner" id="questions_texts">
                        
                    </div>
                </div>
            </div>
            </Fragment>
        )
    }
}

export default Questions
{/* 

                    <div className="question-line">
                        <div className="oracle-tag"><AfricanMask /></div>
                        <div className="oracle-text">
                            <p>Choose one:</p>
                            <h4 id="question_text"></h4>
                        </div>
                    </div>

                    <div className="answer-line">
                        <div className="answer-text">
                            
                            <ul>
                                <label><input type="radio" value={types[this.state.indexes[0]]}
                                    checked={this.state.selectedOption === types[this.state.indexes[0]]}
                                    onChange={this.onValueChange}
                                    name="option-a" id="option-a" /><span id="option-one"></span></label>

                                <label><input type="radio" value={types[this.state.indexes[1]]}
                                    checked={this.state.selectedOption === types[this.state.indexes[1]]}
                                    onChange={this.onValueChange}
                                    name="option-b" id="option-b" /><span id="option-two"></span></label>

                                <label><input type="radio" value={types[this.state.indexes[2]]}
                                    checked={this.state.selectedOption === types[this.state.indexes[2]]}
                                    onChange={this.onValueChange}
                                    name="option-c" id="option-c" /><span id="option-three"></span></label>
                            </ul>
                        </div>
                    </div> */}
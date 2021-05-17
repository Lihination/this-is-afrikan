import { gsap } from 'gsap';
import $ from 'jquery';

function contactAnimation(){
    gsap.to(
        document.querySelectorAll(".other-page"),
        0.6,
        {
            top: "2.5vw",
            left: "2.5vw",
            width: "95vw",
            delay: 1.3,
            ease: "power3.InOut",
            stagger: {
                amount: 0.6
            },
            onComplete: function () {
                gsap.to(
                    document.querySelectorAll(".other-page"),
                    0.6,
                    {
                        top: "0vw",
                        left: "0vw",
                        width: "100vw",
                        height: "100vh",
                        delay: 0.3,
                        ease: "power3.InOut",
                        onComplete: function () {
                            $(".page").css("width", "45vw");
                            $(".page").css("background", "#ffffff");
                            $(".page").css("top", "12vw");
                            $(".page").css("height", "0vw");
                            $(".page").css("left", "27.5vw");
                            $(".page").css("z-index", "2");
                            gsap.to(
                                document.querySelectorAll(".page"),
                                0.6,
                                {
                                    top: "12vw",
                                    left: "27.5vw",
                                    right: "27.5vw",
                                    height: "25vw",
                                    delay: 0.1,
                                    ease: "power3.InOut",
                                    stagger: {
                                        amount: 0.6
                                    },
                                }
                            );
                        },
                        stagger: {
                            amount: 0.6
                        }
                    }
                )
            }
        }
    )
}

export function homeExit(destination) {
    var addition = destination==="contact"? ",#home nav .logo": "";
    gsap.to(
        document.querySelectorAll("#home nav ul li"+ addition),
        0.6,
        {
            y: 30,
            delay: 0.3,
            ease: "power3.InOut",
            opacity: 0,
            stagger: {
                amount: 0.6
            }
        }
    )

    gsap.to(
        document.querySelector("#home .heading"),
        0.8,
        {
            y: 30,
            delay: 0.5,
            ease: "power3.InOut",
            opacity: 0,
            stagger: {
                amount: 0.6
            }
        }
    )

    gsap.to(
        document.querySelector("#home .mouse"),
        1,
        {
            y: 30,
            delay: 0.6,
            ease: "power3.InOut",
            opacity: 0,
            stagger: {
                amount: 0.6
            }
        }
    )
    if (destination === "work") {
        gsap.to(
            document.querySelectorAll(".other-page"),
            1.3,
            {
                top: "2.5vw",
                width: "57vw",
                delay: 1.3,
                ease: "power3.InOut",
                stagger: {
                    amount: 0.6
                }
            }
        )
    }
    else if (destination === "about") {
        gsap.to(
            document.querySelectorAll(".other-page"),
            0.6,
            {
                top: "2.5vw",
                left: "2.5vw",
                width: "95vw",
                delay: 1.3,
                ease: "power3.InOut",
                stagger: {
                    amount: 0.6
                },
                onComplete: function () {
                    $(".page").css("background", "#000000");
                    $(".other-page").css("width", "47.5vw");

                    gsap.frpm(
                        document.querySelectorAll(".other-page"),
                        0.6,
                        {
                            top: "2.5vw",
                            left: "2.5vw",
                            width: "95vw",
                            delay: 0.3,
                            ease: "power3.InOut",
                            stagger: {
                                amount: 0.6
                            }
                        }
                    )
                }
            }
        )
    }
    else if (destination === "contact"){
        contactAnimation();
    }
}

export function aboutExit(destination) {
    var addition = destination==="contact"? ",nav .logo": "";
    gsap.to(
        document.querySelectorAll(" nav ul li"+ addition),
        0.6,
        {
            y: 30,
            delay: 0.2,
            ease: "power3.InOut",
            opacity: 0,
            stagger: {
                amount: 0.6
            }
        }
    )

    gsap.to(
        document.querySelector("#about .content"),
        0.6,
        {
            y: 30,
            delay: 0.3,
            ease: "power3.InOut",
            opacity: 0,
            stagger: {
                amount: 0.6
            }
        }
    )

    if (destination == "contact") {
        contactAnimation()
    }
    else if (destination === "work") {
        gsap.to(
            document.querySelectorAll(".other-page"),
            0.6,
            {
                top: "2.5vw",
                left: "2.5vw",
                width: "95vw",
                delay: 1.3,
                ease: "power3.InOut",
                stagger: {
                    amount: 0.6
                },
                onComplete: function () {
                    $(".page").css("background", "#FBEBD3");
                    $(".other-page").css("width", "calc(95vw * 0.6)");

                    gsap.from(
                        document.querySelectorAll(".other-page"),
                        0.6,
                        {
                            top: "2.5vw",
                            //left: "2.5vw",
                            right: "2.5vw",
                            width: "95vw",
                            delay: 0.3,
                            ease: "power3.InOut",
                            stagger: {
                                amount: 0.6
                            }
                        }
                    )
                }
            }
        )
    }
    else if (destination === "home") {
        gsap.to(
            document.querySelectorAll(".other-page"),
            0.6,
            {
                top: "2.5vw",
                left: "2.5vw",
                width: "95vw",
                delay: 1.3,
                ease: "power3.InOut",
                stagger: {
                    amount: 0.6
                },
                onComplete: function () {
                    $(".page").css("background", "#FBEBD3");
                    $(".other-page").css("width", "0vw");

                    gsap.from(
                        document.querySelectorAll(".other-page"),
                        0.6,
                        {
                            top: "2.5vw",
                            //left: "2.5vw",
                            right: "2.5vw",
                            width: "95vw",
                            delay: 0.3,
                            ease: "power3.InOut",
                            stagger: {
                                amount: 0.6
                            }
                        }
                    )
                }
            }
        )
    }
}

export function workExit(destination) {
    var addition = destination==="contact"? ",nav .logo": "";
    gsap.to(
        document.querySelectorAll(" nav ul li"+addition),
        0.6,
        {
            y: 30,
            delay: 0.2,
            ease: "power3.InOut",
            opacity: 0,
            stagger: {
                amount: 0.6
            }
        }
    )

    gsap.to(
        document.querySelector("#work .content"),
        0.6,
        {
            y: 30,
            delay: 0.3,
            ease: "power3.InOut",
            opacity: 0,
            stagger: {
                amount: 0.6
            }
        }
    )
    if (destination === "about") {
        gsap.to(
            document.querySelectorAll(".other-page"),
            0.6,
            {
                top: "2.5vw",
                left: "2.5vw",
                width: "95vw",
                delay: 1.3,
                ease: "power3.InOut",
                stagger: {
                    amount: 0.6
                },
                onComplete: function () {
                    $(".page").css("background", "#000000");
                    $(".other-page").css("width", "47.5vw");

                    gsap.from(
                        document.querySelectorAll(".other-page"),
                        0.6,
                        {
                            top: "2.5vw",
                            left: "2.5vw",
                            width: "95vw",
                            delay: 0.3,
                            ease: "power3.InOut",
                            stagger: {
                                amount: 0.6
                            }
                        }
                    )
                }
            }
        )
    }
    else if (destination === "home") {
        $(".other-page").css("width", "0vw");
        gsap.from(
            document.querySelectorAll(".other-page"),
            0.6,
            {
                top: "2.5vw",
                left: "2.5vw",
                width: "calc(95vw * 0.6)",
                delay: 1.3,
                ease: "power3.InOut",
                stagger: {
                    amount: 0.6
                },
                onComplete: function () {
                    //$(".page").css("background", "#000000");
                    $(".other-page").css("width", "0vw");
                }
            }
        )
    }
    else if (destination == "contact") {
        contactAnimation();
    }
}

export function contactExit(destination) {
    gsap.to(
        document.querySelectorAll("#contact p"),
        0.6,
        {
            y: 30,
            delay: 0.3,
            ease: "power3.InOut",
            opacity: 0,
            stagger: {
                amount: 0.6
            }
        }
    )

    gsap.to(
        document.querySelectorAll(" #contact nav ul li"),
        0.6,
        {
            y: 30,
            delay: 0.3,
            ease: "power3.InOut",
            opacity: 0,
            stagger: {
                amount: 0.6
            }
        }
    )

    gsap.to(
        document.querySelectorAll("#contact .details, #contact .social"),
        0.6,
        {
            y: 30,
            delay: 0.3,
            ease: "power3.InOut",
            opacity: 0,
            stagger: {
                amount: 0.6
            }
        }
    )


    gsap.to(
        document.querySelectorAll(".page"),
        0.6,
        {
            top: "12vw",
            height: "0vw",
            delay: 1,
            ease: "power3.InOut",
            stagger: {
                amount: 0.6
            },

            onComplete: function () {
                //$(".other-page").css("z-index", "2");
                $(".page").css("z-index", "auto");
                $(".page").css("width", "95vw");
                $(".page").css("top", "2.5vw");
                $(".page").css("height", "calc(100vh - 5vw)");
                $(".page").css("left", "2.5vw");

                gsap.to(
                    document.querySelectorAll(".other-page"),
                    0.6,
                    {
                        top: "2.5vw",
                        left: "2.5vw",
                        width: "95vw",
                        height: "calc(100vh - 5vw)",
                        delay: 0.3,
                        ease: "power3.InOut",
                        stagger: {
                            amount: 0.6
                        },
                        onComplete: function () {
                            if (destination === "/about") {
                                $(".page").css("background", "#000000");
                                $(".other-page").css("width", "47.5vw");
                                gsap.from(
                                    document.querySelectorAll(".other-page"),
                                    0.6,
                                    {
                                        top: "2.5vw",
                                        left: "2.5vw",
                                        width: "95vw",
                                        delay: 0.3,
                                        ease: "power3.InOut",
                                        stagger: {
                                            amount: 0.6
                                        },
                                    }
                                )
                            }else if(destination === "/home"){
                                $(".page").css("background", "#FBEBD3");
                                $(".other-page").css("width", "0vw");
                                gsap.from(
                                    document.querySelectorAll(".other-page"),
                                    0.6,
                                    {
                                        top: "2.5vw",
                                        left: "2.5vw",
                                        width: "95vw",
                                        delay: 0.3,
                                        ease: "power3.InOut",
                                        stagger: {
                                            amount: 0.6
                                        },
                                    }
                                )
                            }
                            else if(destination === "/work"){
                                $(".page").css("background", "#FBEBD3");
                                $(".other-page").css("width", "calc(95vw * 0.6)");
                                gsap.from(
                                    document.querySelectorAll(".other-page"),
                                    0.6,
                                    {
                                        top: "2.5vw",
                                        left: "2.5vw",
                                        width: "95vw",
                                        delay: 0.3,
                                        ease: "power3.InOut",
                                        stagger: {
                                            amount: 0.6
                                        },
                                    }
                                )
                            }
                        }
                    }
                )
            }
        }
    );


}
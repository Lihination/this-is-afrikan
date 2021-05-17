
import {gsap} from 'gsap';


export function WorkEnter(node){
    console.log(node);
    gsap.from(
        document.querySelector("#work .left-section h1"),
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
    var addition = node=="contact"?",nav .logo": "";
    gsap.from(
        document.querySelectorAll(" #work nav ul li"+addition),
        0.6,
        {
          y:30,
          delay: 0.3,
          ease: "power3.InOut",
          opacity: 0,
          stagger: {
            amount: 0.6
          }
        }
      )
  
    gsap.from(
        document.querySelector("#work .left-section p"),
        0.6,
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
  
    gsap.from(
        document.querySelectorAll("#work .left-section .details ul li"),
        0.6,
        {
            y: 30,
            delay: 0.9,
            ease: "power3.InOut",
            opacity: 0,
            stagger: {
                amount: 0.6
            }
        }
    )

    gsap.from(
        document.querySelectorAll("#work .left-section .buttons a"),
        0.6,
        {
            y: 30,
            delay: 0.8,
            ease: "power3.InOut",
            opacity: 0,
            stagger: {
                amount: 0.6
            }
        }
    )
  
    gsap.from(
        document.querySelectorAll("#work .right-section img"),
        0.6,
        {
            y: 30,
            delay: 1.1,
            ease: "power3.InOut",
            opacity: 0,
            stagger: {
                amount: 0.6
            }
        }
    )
    
}


export function HomeEnter(node){
    gsap.from(
        document.querySelector("#home .heading p"),
        0.6,
        {
          y:30,
          delay: 0.3,
          ease: "power3.InOut",
          opacity: 0,
          stagger: {
            amount: 0.6
          }
        }
      )
  
      gsap.from(
        document.querySelector("#home .heading h1"),
        0.6,
        {
          y:30,
          delay: 0.6,
          ease: "power3.InOut",
          opacity: 0,
          stagger: {
            amount: 0.6
          }
        }
      )
  
      gsap.from(
        document.querySelector("#home .heading h3"),
        0.6,
        {
          y:30,
          delay: 0.9,
          ease: "power3.InOut",
          opacity: 0,
          stagger: {
            amount: 0.6
          }
        }
      )
      var addition = node=="contact"?",nav .logo": "";
      gsap.from(
        document.querySelectorAll(" #home nav ul li"+addition),
        0.6,
        {
          y:30,
          delay: 0.3,
          ease: "power3.InOut",
          opacity: 0,
          stagger: {
            amount: 0.6
          }
        }
      )
  
      gsap.from(
        document.querySelectorAll("#home .mouse"),
        0.6,
        {
          y:30,
          delay: 1.2,
          ease: "power3.InOut",
          opacity: 0,
          stagger: {
            amount: 0.6
          }
        }
      )
}

export function AboutEnter(node){
    gsap.from(
        document.querySelectorAll("#about .content h1"),
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
    var addition = node=="contact"?",nav .logo": "";
    gsap.from(
        document.querySelectorAll(" #about nav ul li"+ addition),
        0.6,
        {
          y:30,
          delay: 0.3,
          ease: "power3.InOut",
          opacity: 0,
          stagger: {
            amount: 0.6
          }
        }
      )

    gsap.from(
        document.querySelectorAll("#about .content p"),
        0.6,
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
}

export function ContactEnter(node){
    gsap.from(
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

    gsap.from(
        document.querySelectorAll(" #contact nav ul li"),
        0.6,
        {
          y:30,
          delay: 0.3,
          ease: "power3.InOut",
          opacity: 0,
          stagger: {
            amount: 0.6
          }
        }
      )

    gsap.from(
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
}
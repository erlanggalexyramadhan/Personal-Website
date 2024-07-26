"use client";
import { useEffect } from "react";
import gsap from "gsap";
import anime from "animejs";
import Image from "next/image";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import ScrollTrigger from "@/components/ScrollTriggerComponent";
import StickyFooter from "@/components/StickyFooter";
import Link from "next/link";

gsap.registerPlugin(CSSRulePlugin);
const Home = () => {
  useEffect(() => {
    const startLoader = () => {
      const counterElement = document.querySelector(".count p");
      let currentValue = 0;

      const updateCounter = () => {
        if (currentValue < 100) {
          let increment = Math.floor(Math.random() * 10) + 1;
          currentValue = Math.min(currentValue + increment, 100);
          if (counterElement) {
            counterElement.textContent = currentValue.toString();
          }

          let delay = Math.floor(Math.random() * 200) + 25;
          setTimeout(updateCounter, delay);
        }
      };
      updateCounter();
    };

    startLoader();
    gsap.to(".count", { opacity: 0, delay: 3.5, duration: 0.5 });

    let textWrapper = document.querySelector(".ml16");
    if (textWrapper) {
      textWrapper.innerHTML =
        textWrapper.textContent?.replace(
          /\S/g,
          "<span class='letter'>$&</span>"
        ) || "";

      anime
        .timeline({ loop: false })
        .add({
          targets: ".ml16 .letter",
          translateY: [-100, 0],
          easing: "easeOutExpo",
          duration: 1500,
          delay: (el, i) => 30 * i,
        })
        .add({
          targets: ".ml16 .letter",
          translateY: [0, 100],
          easing: "easeOutExpo",
          duration: 3000,
          delay: (el, i) => 2000 + 30 * i,
        });
    }

    gsap.to(".pre-loader", {
      scale: 0.5,
      ease: "power4.inOut",
      duration: 2,
      delay: 3,
    });

    gsap.to(".loader", {
      height: "0",
      ease: "power4.inOut",
      duration: 1.5,
      delay: 3.75,
    });

    gsap.to(".loader-bg", {
      height: "0",
      ease: "power4.inOut",
      duration: 1.5,
      delay: 4,
    });

    gsap.to(".loader-2", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      ease: "power4.inOut",
      duration: 1.5,
      delay: 3.5,
    });

    gsap.to(".logo", {
      delay: 4,
    });

    gsap.from(".header h1", {
      y: 100,
      ease: "power4.inOut",
      duration: 1.5,
      delay: 3.75,
      stagger: 0.05,
    });

    gsap.to(".img", {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      ease: "power4.inOut",
      duration: 1.5,
      delay: 4.5,
      stagger: 0.25,
    });

    const activeItemIndicator = CSSRulePlugin.getRule(
      ".menu-item p#active::after"
    );
    const toggleButton = document.querySelector(".burger");
    let isOpen = false;

    gsap.set(".menu-item p", { y: 225 });

    const timeline = gsap.timeline({ paused: true });

    timeline.to(".overlay", {
      duration: 1.5,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "power4.inOut",
    });

    timeline.to(
      ".menu-item p",
      {
        duration: 1.5,
        y: 0,
        stagger: 0.2,
        ease: "power4.out",
      },
      "-=1"
    );

    timeline.to(
      activeItemIndicator,
      {
        width: "100%",
        duration: 1,
        ease: "power4.out",
        delay: 0.5,
      },
      "<"
    );

    timeline.to(
      ".sub-nav",
      {
        bottom: "10%",
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
      },
      "<"
    );

    toggleButton?.addEventListener("click", function () {
      if (isOpen) {
        timeline.reverse();
      } else {
        timeline.play();
      }
      isOpen = !isOpen;
    });
  }, []);

  const handleButtonClick = () => {
    const button = document.querySelector(".burger");
    if (button) {
      button.classList.toggle("active");
    }
  };

  return (
    <>
      <section className="max-h-screen">
        <div className="container">
          <div className="pre-loader">
            <div className="loader"></div>
            <div className="loader-bg"></div>
          </div>
          <div className="loader-content">
            <div className="count">
              <p>0</p>
            </div>
            <div className="copy">
              <p className="ml16">Erlangga</p>
            </div>
          </div>
          <Image
            src="images/hero.png"
            className="loader-2"
            width={500}
            height={500}
            alt="bg"
            priority={true}
          />
        </div>
        <div className="site-content">
          <nav>
            <div className="logo font-bold hover:cursor-pointer">
              <Link href="/" className="logo font-bold cursor-pointer">
                LEX
              </Link>
            </div>
          </nav>
          <div className="header">
            <h1>E</h1>
            <h1>r</h1>
            <h1>l</h1>
            <h1>a</h1>
            <h1>n</h1>
            <h1>g</h1>
            <h1>g</h1>
            <h1>a</h1>
          </div>
          <div className="footer">
            <div className="footer-copy">
              <p>
                I am Erlangga Lexy Ramadhan, a passionate and dedicated developer
                with expertise in modern web technologies and a strong interest
                in building innovative and efficient solutions. With a solid
                foundation in Next.js, TypeScript, and Tailwind CSS, I
                specialize in creating dynamic and responsive web applications.
              </p>
            </div>
            <div className="footer-nav">
              <Image
                src="https://github.com/erlanggalexyramadhan/Personal-Website/tree/main/public/images/poster1.jpeg"
                width={500}
                height={500}
                alt=""
                className="img"
              />
              <Image
                src="https://github.com/erlanggalexyramadhan/Personal-Website/tree/main/public/images/poster2.png"
                width={500}
                height={500}
                alt=""
                className="img"
              />
            </div>
          </div>
        </div>
      </section>
      <ScrollTrigger />
      <StickyFooter />
    </>
  );
};

export default Home;

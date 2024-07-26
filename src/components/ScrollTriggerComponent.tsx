import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Image from "next/image";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollTriggerComponent: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time: number) => {
      lenis.raf(time * 1000);
    });

    let workInfoItems =
      document.querySelectorAll<HTMLElement>(".work-photo-item");
    workInfoItems.forEach((item, index) => {
      item.style.zIndex = (workInfoItems.length - index).toString();
    });

    gsap.set(".work-photo-item", {
      clipPath: function () {
        return "inset(0px 0px 0px 0px)";
      },
    });

    const animation = gsap.to(".work-photo-item:not(:last-child)", {
      clipPath: () => {
        return "inset(0px 0px 100% 0px)";
      },
      stagger: 0.5,
      ease: "none",
    });

    console.log("Creating ScrollTrigger with:", {
      trigger: ".work",
      start: "top top",
      end: "bottom bottom",
      animation: animation,
      scrub: 1,
    });

    ScrollTrigger.create({
      trigger: ".work",
      start: "top top",
      end: "bottom bottom",
      animation: animation,
      scrub: 1,
    });
    console.log(ScrollTrigger);
  }, []);

  return (
    <div className="wrapp mt-[700px] bg-black text-white rounded-3xl">
      <section className="work">
        <div className="work-left">
          <div className="work-text">
            <div className="work-info">
              <div className="work-left-bl">
                <span className="work-num">01</span>
                <h2 className="title">
                  Personal Website <span className="stroke">Next.JS</span>
                </h2>
                <a href="https://erlanggalexyramadhan.github.io/Personal-Website/" className="work-link">
                  view
                </a>
              </div>
            </div>
            <div className="work-info">
              <div className="work-left-bl">
                <span className="work-num">02</span>
                <h2 className="title">
                  To-Do List <span className="stroke">React</span>
                </h2>
                <a href="https://erlanggalexyramadhan.github.io/To-Do-List-React/" className="work-link">
                  view
                </a>
              </div>
            </div>
            <div className="work-info">
              <div className="work-left-bl">
                <span className="work-num">03</span>
                <h2 className="title">
                  E-Commerce <span className="stroke">React</span>
                </h2>
                <a href="https://github.com/erlanggalexyramadhan/E-Commerce-React" className="work-link">
                  view
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="work-right">
          <div className="work-right-bl">
            <div className="work-photo">
              <div className="work-photo-item" title="1">
                <Image
                  src="/Personal-Website/images/web1.png"
                  width={1080}
                  height={1080}
                  alt=""
                />
              </div>
              <div className="work-photo-item" title="2">
                <Image
                  src="/Personal-Website/images/web2.png"
                  width={1080}
                  height={1080}
                  alt=""
                  priority={true}
                />
              </div>
              <div className="work-photo-item" title="3">
                <Image
                  src="/Personal-Website/images/web3.png"
                  width={1080}
                  height={1440}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollTriggerComponent;

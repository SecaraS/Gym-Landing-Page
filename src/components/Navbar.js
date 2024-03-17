import React, { useEffect } from 'react';
import { gsap, Bounce, Power3 } from "gsap";
import "../styles/Navbar.css";
import Logo from "../assets/img/excelLogo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  useEffect(() => {
    const lis = document.querySelectorAll("li");
    const lbs = document.querySelectorAll(".lb");
    const uls = document.querySelectorAll("ul");
    const lineDash = document.querySelectorAll(".line-dash");

    let dashOrigin = -35;
    let selectedLi = -35;
    let speed = 500;
    let distance = 0;
    let time = 0;

    gsap.to(lbs[0], 0.6, {
      y: -43,
      ease: Bounce.easeOut,
      delay: 1
    });
    lis[0].classList.add("active");

    function pushDownLb() {
      for (let k = 0; k < lbs.length; ++k)
        gsap.to(lbs[k], 0.5, {
          y: 0,
          ease: Power3.easeOut
        });
    }

    uls.forEach((ul) => {
      ul.addEventListener("mouseleave", function (e) {
        if (e.relatedTarget) {
          distance = Math.abs(dashOrigin - selectedLi);
          time = distance / speed;
          dashOrigin = selectedLi;
          if (time) {
            gsap.to(lineDash, time, {
              strokeDashoffset: selectedLi,
              ease: Bounce.easeOut
            });
          }
        }
      }, false);
    });

    for (let i = 0; i < 4; ++i) {
      lis[i].addEventListener("mouseover", function () {
        distance = Math.abs(-250 * i - 35 - dashOrigin);
        time = distance / speed;
        dashOrigin = -250 * i - 35;
        if (time) {
          gsap.to(lineDash, time, {
            strokeDashoffset: -250 * i - 35,
            ease: Bounce.easeOut
          });
        }
      });

      lis[i].addEventListener("click", function () {
        updateSelectedItem(i);
      });
    }

    // Event listener for logo click
    const logo = document.querySelector(".logo");
    logo.addEventListener("click", () => {
      updateSelectedItem(0); // Assuming Home is the first item
    });

    function updateSelectedItem(index) {
      selectedLi = -250 * index - 35;
      pushDownLb();
      let current = document.querySelector(".active");
      if (current) {
        current.classList.remove("active");
      }
      lis[index].classList.add("active");
      gsap.to(lbs[index], 0.5, {
        y: -43,
        ease: Bounce.easeOut
      });

      // Animate the lines
      distance = Math.abs(selectedLi - dashOrigin);
      time = distance / speed;
      dashOrigin = selectedLi;
      if (time) {
        gsap.to(lineDash, time, {
          strokeDashoffset: selectedLi,
          ease: Bounce.easeOut
        });
      }
    }
  }, []);

  return (
    <div className="header">
      <Link to="/">
        <img className="logo" src={Logo} alt="waiting" />
      </Link>
      <div className="menu">

        <svg className="line-top width=750" height="15" viewBox="0,0 1000, 20">
          <line
            className="line-dash"
            x1="0"
            y1="15"
            x2="1000"
            y2="15"
            style={{
              stroke: "orange",
              strokeWidth: 2,
              strokeLinecap: "round",
              strokeDasharray: "180,1200",
              strokeDashoffset: -35,
            }}
          />
        </svg>

        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="gallery"><li>Gallery</li></Link>
          <Link to="contact"><li>Contact</li></Link>
          <Link to="about"><li>About</li></Link>
        </ul>

        <svg className="line-bottom" width="750" height="30" viewBox="0, 0 1000, 40">
          <polygon className="lb" points="35, 53, 115, 53 125, 43 135, 53 215, 53" />
          <polygon className="lb" points="285,53 365, 53 375, 43 385, 53 465, 53" />
          <polygon className="lb" points="535, 53 615, 53 625, 43 635, 53 715, 53" />
          <polygon className="lb" points="785, 53 865, 53 875, 43 885, 53 965, 53" />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;

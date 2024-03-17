import React from "react";
import training1Image from "../assets/gallery/excelGym-story_files/1.jpg";
import training2Image from "../assets/gallery/excelGym-story_files/2.jpg";
import training3Image from "../assets/gallery/excelGym-story_files/3.jpg";
import abtImg1 from "../assets/gallery/excelGym-story_files/train1.jpg";
import abtImg3 from "../assets/gallery/excelGym-story_files/train3.jpg";
import chill1 from "../assets/gallery/excelGym-story_files/happ.jpg";
import chill2 from "../assets/gallery/excelGym-story_files/anniv.jpg";
import "../styles/AboutUs.css";

function About() {
  return (
    <div>
    <div className="pageContainer">
      <h1 className="titleAbout">About Excel Gym</h1>
    <div className="containerAbout"> 
      <div className="contStory">
        <img className="train1Img" src={training1Image} alt="Training from Excel Gym" />
        <img className="train2Img"  src={training2Image} alt="Training from Excel Gym" />
        <img className="train3Img"  src={training3Image} alt="Training from Excel Gym" />
        </div>
    <div className="contStoryText">
          <div className="aboutText">
      <p className="storyTexts">
     - In January 2021, we embarked on a mission to redefine fitness and well-being for our community. Since then, our journey has been
        a testament to the passion and commitment of our pioneers.
      </p>
    </div>
   </div>
  </div>
 </div>

      <div className="pageContainer">
        <div className="containerAbout">
          <div className="contStory">
            <img className="train4Img" src={abtImg1} alt="Training from Excel Gym" />
            <img className="train5Img" src={abtImg3} alt="Training from Excel Gym" />
          </div>
          <div className="contStoryText">
            <div className="aboutText">
              <p className="storyTexts">
               - Every day, our dedicated community at Excel Gym exemplifies the power of consistency
                 and passion. 
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pageContainer">
        <div className="containerAbout">
          <div className="contStory">
            <img className="train6Img" src={chill1} alt="Training from Excel Gym" />
            <img className="train7Img" src={chill2} alt="Training from Excel Gym" />
          </div>
          <div className="contStoryText">
            <div className="aboutText">
              <p className="storyTexts">
                -  Whether it's a peaceful stretch, a moment of meditation, or simply relishing in a well-deserved rest, our members recognize that balance is the cornerstone of a healthy, fulfilling lifestyle.
              </p>
            </div>
          </div>
        </div>
      </div>
</div>
  );
}
export default About
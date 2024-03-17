import React from 'react';
import BannerImage from "../assets/gallery/excelGym-story_files/homeTheme.jpg";
import "../styles/Home.css";
import BannerImage2  from "../assets/gallery/excelGym-story_files/boxyImg4.png";
import hIcons1 from "../assets/gallery/excelGym-story_files/hIcon1.png";
import hIcons2 from "../assets/gallery/excelGym-story_files/hIcon2.png";
import hIcons3 from "../assets/gallery/excelGym-story_files/hIcon3.png";
import hIcons4 from "../assets/gallery/excelGym-story_files/hIcon4.png";
import test from "../assets/gallery/excelGym-story_files/serviceY.png";
import test0 from "../assets/gallery/excelGym-story_files/dumbbellW.png";
import test1 from "../assets/gallery/excelGym-story_files/boxingRing.png";
import test2 from "../assets/gallery/excelGym-story_files/exerciseList.png";
import test3 from "../assets/gallery/excelGym-story_files/trainingEquip.png"
import test5 from "../assets/gallery/excelGym-story_files/sauna.png"

function Home () {
  
  const scrollNext = () => {
    const nextSection = document.querySelector('.tableSection');

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return ( 
  <div className='homeContainer'>
  <div className="homeSection">
        <div className="homePrev">
        <h1 className="fTitle">Excel Gym</h1>
        <h1 className="sTitle">Empower. Transcend. Succed.</h1>
        <button className="homeBtn" onClick={scrollNext}>
            Explore more
             <span className="orange-arrow">➟</span>
        </button>
          <div className="homeIcons">
            <img className="exploreIcons" src={hIcons4} alt="Training from Excel Gym" />
            <img className="exploreIcons" src={hIcons2} alt="Training from Excel Gym" />
            <img className="exploreIcons" src={hIcons3} alt="Training from Excel Gym" />
            <img className="exploreIcons" src={hIcons1} alt="Training from Excel Gym" />
          </div>
        </div>
        <img src={BannerImage} alt="Training from Excel Gym" />
      </div>


<div className = "tableSection">
<div className = "tableDetailed">
          <div className="homeGrid">
            <div className="serviceGrid">
              <img className="serviceIcons" src={test} alt="Training from Excel Gym" />
              <p className="serviceSub">Services for you: </p>
            </div>

            <div id="tableBack" className="fSport1">
              <img className="serviceIcons" src={test0} alt="Training from Excel Gym" />
              <p className="serviceSub">Fitness</p>
              <p className="serviceP">Navigate through top-tier equipment and customized workouts.</p>
            </div>

            <div className="fSport2">
              <img className="serviceIcons" src={test1} alt="Training from Excel Gym" />
              <p className="serviceSub">Boxing Ring</p>
              <p className="serviceP">Experience the thrill of a boxing match.</p>
            </div>

            <div className="fSport3">
              <img className="serviceIcons" src={test2} alt="Training from Excel Gym" />
              <p className="serviceSub">Cardio</p>
              <p className="serviceP">Experience the power of cardio at our gym.</p>
            </div>

            <div className="fSport4">
              <img className="serviceIcons" src={test5} alt="Training from Excel Gym" />
              <p className="serviceSub">Sauna</p>
              <p className="serviceP">A perfect reward for your hard-earned efforts.</p>
            </div>
            <div className="fSport5">
              <img className="serviceIcons" src={test3} alt="Training from Excel Gym" />
              <p className="serviceSub">Workout Gear</p>
              <p className="serviceP">Every rep and every lift is supported by durable equipment.</p>
            </div>
          </div>
<img className="boxyImg" src={BannerImage2} 
  alt="Train from gym "/>
  </div>
</div>
</div>
  );
};
export default Home;
import React from 'react';
import training0Img from "../assets/gallery/training4.jpg";
import training1Img from "../assets/gallery/training3.jpg";
import training2Img from "../assets/gallery/training7.jpg";
import training3Img from "../assets/gallery/training1.jpg";
import event1 from "../assets/gallery/spartanRace.jpg";
import event2 from "../assets/gallery/turfGames.jpg";
import event3 from "../assets/gallery/wodapalooza.jpg";
import "../styles/Gallery.css"

function Gallery() {
  return (
    <div className='galleryPage'>
    <div className="containerGallery">
      <div className="part1">
      <img src={training0Img} alt="Training from Excel Gym" />
      </div>

      <div className="part2">
        <img src={training1Img} alt="Training from Excel Gym" />
      </div>

      <div className="part3">
        <p>Our Gym, Your Journey</p>
      </div>

      <div className="part4">
        <p>Excel Gym</p>
      </div>

      <div className="part5">
        <img src={training3Img} alt="Training from Excel Gym" />
      </div>

      <div className="part6">
        <p>Sweat, Smile, Repeat</p>
      </div>

      <div className="part7">
        <img src={training2Img} alt="Training from Excel Gym" />
      </div>
    </div>

    <div className="containerGallery2">
      <div className="boxy0">
          <p>Dive into Gym Competing</p>
      </div>

        <div className="boxy1">
          <img src={event1} alt="Training from Excel Gym" />
          <p> "Spartan Races are notorious for their difficulty, testing competitors’ skills, endurance, and grit, no matter the length of the race."   </p>
        </div>

        <div className="boxy2">
          <p> "The London-born fitness event The Turf Games was designed as a way to bring people together in a team-based challenge." </p>
          <img src={event2} alt="Training from Excel Gym" />
        </div>

        <div className="boxy3">
          <img src={event3} alt="Training from Excel Gym" />
          <p> "Wodapalooza represents a convergence of fitness, community, and celebration, creating an inspiring atmosphere." </p>
        </div>
    </div>
    </div>
  )
}

export default Gallery;
import React from "react";
import myImage1 from "./images/myImage1.jpg";
import myImage2 from "./images/myImage2.jpg";
import myImage3 from "./images/myImage3.jpg";
import "./Carousel1.css";
const Carousel1 = () => {
  return (
    <div>
      <div
        id="carouselExampleAutoplaying"
        className="carousel1-slide slide"
        data-bs-ride="carousel"
      >
        <h2 className="carousel1-slide-h2">Customer Review</h2>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={myImage1} className="carousel-item-img" alt="..." />
            <p className="carousel-item-p">
              "I've been a member of this gym for over a year now, and I
              couldn't be happier with my experience. The facility is clean,
              spacious, and well-equipped with a variety of machines and free
              weights. The staff is friendly, knowledgeable, and always
              available to provide guidance or answer any questions I have.
            </p>
          </div>
          <div className="carousel-item">
            <img src={myImage2} className="carousel-item-img" alt="..." />
            <p className="carousel-item-p">
              One thing that sets this gym apart is the wide range of classes
              they offer. From yoga and spin to high-intensity interval
              training, there's something for everyone. The instructors are
              highly skilled and create a motivating and energizing atmosphere
              in each class. I've tried several different classes and have seen
              significant improvements in my strength and overall fitness.
            </p>
          </div>
          <div className="carousel-item">
            <img src={myImage3} className="carousel-item-img" alt="..." />
            <p className="carousel-item-p">
              I've been a member of this gym for several months now, and I
              couldn't be more thrilled with the experience. The gym offers
              state-of-the-art equipment that caters to all types of workouts
              and fitness levels. Whether I'm looking to lift weights, do
              cardio, or engage in functional training, there's always a wide
              range of options available.
            </p>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel1;

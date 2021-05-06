import React from "react";
import peace from "./img/peace.jpg";

export default function About() {
  return (
    <div className="post-container about">
      <div className="post">
        <h1>Our story</h1>
        <hr />
        <img src={peace} className="profile yogaphoto" alt="" />
        <div className="story">
          Welcome to{" "}
          <strong>
            <em>Yoga with Laura.</em>
          </strong>{" "}
          We are a team of 5 international Yoga teachers on a mission to help
          people of all backgrounds, shapes and sizes to lead a more active
          lifestyle and nourish the mind, body and soul. We want to build a
          community of like-minded people with classes accesible for everyone at
          every level. 1,000 happy members have joined our Yoga Community since
          the launch. We love helping as many people as we can by providing
          quality videos, online support and a variety of classes to fit
          everyone.
          <br />
          <br />
          <strong>
            <em>Yoga with Laura</em>
          </strong>{" "}
          was launched in 2015 as an online Yoga teaching business.{" "}
          <em>Laura</em> is an international Yoga Teacher and Web Designer from
          the United Kingdom, who started her Yoga journey 10 years ago. She
          focuses mainly on Hatha Yoga and Vinyasa Flow. <em>Antonia</em> is an
          international Yoga Teacher and Digital Entrepreneur from Romania, on a
          mission to get more people on the mat, whilst focusing on a hollistic
          approach. <em>Johanna</em> is a Mind&Body Coach with a nutrition
          background as well as 6 years of experience teaching Yoga in Columbia.
          Our team members come from a variety of backgrounds and are here to
          guide you straight from the comfort of your own home.
          <br />
          <br />
          Our classes are suitable for anyone who lacks the time to head to the
          gym or a studio or would just prefer to exercise from home. Whoever
          you are, we have the perfect workout for you! If this resonates with
          you, step on your mat and let us guide you on your journey to better
          health.
        </div>
        <hr className="about-hr" />
      </div>
    </div>
  );
}

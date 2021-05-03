import React from "react";
import peace from "./img/peace.jpg";

export default function About() {
  return (
    <div className="post-container about">
      <h2>Our Yoga story</h2>
      <hr />
      <img src={peace} className="profile yogaphoto" alt="" />
      <div className="story">
        Welcome to{" "}
        <strong>
          <em>Yoga with Laura.</em>
        </strong>{" "}
        We are a team of 5 international Yoga teachers on a mission to help you
        lead a more active lifestyle and teach you how to nourish your mind,
        body and soul. We want to build a community of like-minded people with
        classes accesible for everyone at every level. 1,000 happy members have
        joined the Yoga Community since the launch. We love helping as many
        people as we can by providing quality videos, online support and a
        variety of classes.
        <br />
        <br />
        <strong>
          <em>Yoga with Laura</em>
        </strong>{" "}
        was launched in 2015 as an online Yoga teaching business. <em>Laura</em>
        , the founder of{" "}
        <strong>
          <em>Yoga with Laura</em>
        </strong>{" "}
        is an international Yoga Teacher and entrepreneur from the United
        Kingdom, who started her Yoga journey 10 years ago. <em>Antonia</em> is
        an international Yoga Teacher and Digital Entrepreneur from Romania, on
        a mission to get more people on the mat, whilst focusing on a hollistic
        approach. <em>Johanna</em> is a Mind&Body Coach with a nutrition
        background as well as 6 years of experience teaching Yoga in Columbia.
        Our team members come from a variety of backgrounds and are here to
        guide you straight from the comfort of your own home.
        <br />
        <br />
        Our classes are suitable for anyone who lacks the time to head to the
        gym or a studio or would just prefer to exercise from home. Whoever you
        are, we have the perfect workout for you!
        <br />
        <br />
        If this resonates with you, step on your mat and let us guide you on
        your journey.
      </div>
      <hr className="about-hr" />
    </div>
  );
}

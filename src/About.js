import React from "react";
import me from "./img/me.JPG";

export default function About() {
  return (
    <div className="about">
      <h2>Our Yoga story</h2>
      <hr />
      <img src={me} className="profile yogaphoto" alt="" />
      <div className="story">
        <strong>
          <em>Yoga with Laura</em>
        </strong>{" "}
        was launched in 2015 as an online Yoga teaching business. Laura is an
        international Yoga teacher and entrepreneur from The United Kingdom, who
        started her Yoga journey 10 years ago. <br />
        Our team of experienced teachers come from a variety of backgrounds and
        are here to guide you on your Yoga journey straight from the comfort of
        your own home.{" "}
        <strong>
          <em>Our mission</em>
        </strong>{" "}
        is to help people lead a more active lifestyle and to teach them how to
        nourish the mind, body and soul.
        <br />
        <br />
        Our classes are suitable for anyone who lacks the time to head to the
        gym or a studio or would just prefer to exercise from home. Whoever you
        are, we have the perfect workout for you!
        <br />
        <br />
        <strong>
          <em>Yoga with Laura</em>
        </strong>{" "}
        currently has over 1,000 happy members who have joined the Yoga
        Community since the launch. We love helping as many people as we can by
        providing quality videos, online support and a variety of classes for
        all levels. So step on your mat, enjoy your practice and don't worry,
        we've got your back!
      </div>
      <hr />
    </div>
  );
}

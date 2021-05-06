import React from "react";
import tree from "./img/tree.jpg";
import chair from "./img/chair.jpg";

export default function Contact() {
  function reserve() {
    let name = prompt("What is your name?");
    prompt("What is your telephone number?");

    let subscribe = document.querySelector(".confirmation");
    subscribe.innerHTML = `<strong>Thank you <span><em>${name}</em></span> ! We'll be in touch!</strong>`;
  }

  return (
    <div className="post-container">
      <div className="post">
        <h2>How to book a class?</h2>
        <img src={tree} className="treePose" alt="" />
        <p>
          Our classes run Monday - Saturday and are 45 minutes long. In each
          class we focus on specific areas of the body to achieve strength,
          flexibility and balance. The cost is £10 per session or £30 for a
          monthly membership. Your first 2 taster Yoga classes will be{" "}
          <strong>FREE</strong>.<br /> <br />
          We encourage everyone to be logged in on Zoom at least 5 minutes prior
          to the scheduled time. We love receiving feedback from our community,
          therefore we have a dedicated 5-10 minute question time at the end of
          each class. All you need is your Yoga mat, a bottle of water, a
          cushion or towel for support and your smile!
          <br />
          <br />
          To book please click the <em>Reserve space </em>button below and leave
          us your details. We will be in touch to take a card payment over the
          phone.
        </p>
        <hr />
        <img src={chair} className="Seated" alt="" />
        <hr />
        <div className="contact-details">
          <p>Contact details</p>
          <h4>☎️ 07951 105528</h4>
          <a href="mailto:lauradumitru88@icloud.com">
            📧 lauradumitru88@icloud.com
          </a>
        </div>
        <br />
        <button className="reserve" onClick={reserve}>
          Reserve space
        </button>
        <div class="confirmation"></div>
        <hr />
        <p className="community"> Click below to join our Facebook community</p>
        <button className="join">
          <a
            href="https://facebook.com/groups/1466503350210644/about"
            target="_blank rel="
            noreferrer
          >
            Join Community
          </a>
        </button>
      </div>
    </div>
  );
}

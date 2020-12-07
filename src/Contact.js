import React from "react";
import contact from "./img/contact.jpg";

export default function Contact() {
  return (
    <div class="contact">
      <h3>How to book our Yoga classes?</h3>
      <img src={contact} class="Seated" alt="" />
      <p>
        Our classes are 45 minutes long and cost only £10 per session. We accept
        all major Debit/Credit cards and payments can be made over the phone. We
        encourage everyone to be logged in on Zoom at least 10 minutes prior to
        the scheduled time to ensure no delays are taking place. We love
        receiving feedback from our community, therefore we have a dedicated
        5-10 minute question time at the end of each class to ensure everybody
        got on alright and to see if anyone has any questions or suggestions.
        <br /> All you need to attend the class is your Yoga mat, a bottle of
        water, a cushion or towel for support and your smile! Follow the steps
        below, put something comfy on and see you on the mat. 👋🏼
      </p>
      <hr />
      <ul>
        <li>
          ✨ Click the below button below to <em>reserve</em> your space
        </li>
        <li> ✨ The team will get in touch with you to confirm </li>
        <li>✨ You make the class payment whilst on the phone</li>
        <li>✨ We send you the link to the Zoom class via e-mail</li>
        <li>✨ Click on the Zoom link and be ready for the class</li>
      </ul>
      <hr />
      <div class="contact-details">
        <p>
          If you still need our help, you can reach us on the below contact
          details:
        </p>
        <h4>☎️ 07951 105528</h4>
        <a href="mailto:lauradumitru88@icloud.com">
          📩 lauradumitru88@icloud.com
        </a>
      </div>
      <br />
      <button class="book">Reserve space</button>
      <hr />
      <p>
        Click below to join our Yoga community, where you will meet like-minded
        people to connect with. This is your space, created with love.
      </p>
      <button class="join">
        <a
          href="https://facebook.com/groups/1466503350210644/about"
          target="_blank rel="
          noreferrer
        >
          Join Community
        </a>
      </button>
    </div>
  );
}

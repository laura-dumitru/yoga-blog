import React from "react";
import warrior from "./img/warrior.jpg";
import plants from "./img/plants.jpg";
import pigeonpose from "./img/pigeonpose.jpg";
import flowers from "./img/flowers.jpg";
import twist from "./img/twist.jpg";
import cross from "./img/cross.jpg";

export default function Home() {
  return (
    <div id="content">
      <div className="post-container">
        <div className="post">
          <div className="post-author">
            <img src={plants} className="profile" alt="" />
            <br />
          </div>

          <p className="post-title">
            A warm welcome to
            <strong>
              <em>Yoga with Laura</em>
            </strong>
            , your place for Yoga classes, tips, techniques and more. Yoga has
            the power to transform your body and your mind. It will help you
            gain strength, flexibility and a better mind and body connection.
            Are you feeling stressed, disconnected, tense? Do you want to feel
            more energised, connect with your body, become stronger and more
            flexible? If this sounds like something you are looking for, come
            join our specially designed 45 minute classes. No matter the level
            you are at, we have something for everyone in our community. Let's
            step on the mat and build some healthy habits together!
          </p>
          <hr />
          <div className="post-content">
            <p>
              Take a sneak peak below into this month's article - Poses we love
              to practice!
            </p>
            <ul>
              <li>
                <h4>Pigeon Pose</h4>
                <p>
                  Starting in <em>Downward Facing Dog</em> bring your left leg
                  up into a <em>Down Dog Split</em>. Bend your left knee and
                  bring it forward as if you were going to step into a lunge.
                  Instead of placing your foot down on the mat, as you would for
                  a lunge, bring your left knee to the floor on the outside of
                  your left hand. Release your right knee to your mat. Your
                  right leg should be flat on the floor. Square your hips
                  towards the front of your mat. You can place a folded blanket
                  or a cushion under the left side of your hip to make the pose
                  more comfortable. If you want to go any further than this, you
                  could bring your torso down into a forward bend over your left
                  leg. Reach your forehead towards the floor. Come back up,
                  bringing your hands in line with your hips. To release, curl
                  your left toes under and step back into a{" "}
                  <em>Downward Facing Dog</em>. Repeat the pose on the other
                  side.
                </p>
                <img src={pigeonpose} alt="" />
              </li>
              <hr />
              <h4>Sukhasana Easy Pose </h4>
              <p>
                <em>Easy Pose </em>is a relaxing hip-opening pose that stretches
                and strengthens the back and is used during meditation practice.
                To start off place a blanket or a block under your sit bones so
                that your hips are higher than your knees and cross your legs.
                Make sure your shoulders are aligned directly over your hips.
                The crown of your head should rise towards the ceiling. Place
                your hands on your lap or on top of your thighs. Turn your palms
                up towards the ceiling. Inhale. Exhale. Repeat.
                <img src={cross} alt="" />
              </p>

              <li>
                <hr />
                <h4>Warrior II </h4>
                <p>
                  Let's start in <em>Mountain pose (Tadasana)</em> and take a
                  big step back with our right leg. Align your right foot with
                  the short edge of the mat so that the toes point toward the
                  long edge of the mat. The left foot is straight with the toes
                  pointing forward. Bend the left knee so that it is in a 90
                  degree angle above your ankle. Keep your back leg straight and
                  the back foot engaged and let your hip sink down. Raise your
                  arms parallel to the floor with the palms facing down. Turn
                  your head to look towards the front hand. Try to keep your
                  spine straight and your body in a vertical line.
                  <br />
                  <img src={warrior} alt="" />
                </p>
              </li>
              <li>
                <hr />
                <h4>Seated Twist</h4>
                <p>
                  Sit cross-legged with one leg folded in front of the other and
                  your back straight. Next bring your left hand to your right
                  knee and place your right fingertips on the mat behind you.
                  Inhale deeply while sitting up tall. Exhale and twist from the
                  base of your spine to the right. If you’re unable to sit
                  cross-legged with your back straight, sit on a block to help
                  lift your hips up higher than your knees. Lengthen your spine
                  with every inhale and deepen the twist with every exhale.
                  <img src={twist} alt="" />
                </p>
              </li>

              <li>
                <hr />
                <h4 class="warrior">Warrior I</h4>
                <p>
                  Begin standing, then step your right foot forward. Keep your
                  toes pointing to the top of the mat and bend your knee into a
                  lunge. Keep your left leg straight behind you and turn your
                  left heel in at approximately 45 degrees. Raise your arms
                  straight above your head. Keep your shoulders pressed down and
                  squeeze your shoulder blades together. Lift your head up to
                  the sky and gaze at your hands. Smile. Hold your pose and then
                  repeat on the left side.
                  <img src={flowers} alt="" />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

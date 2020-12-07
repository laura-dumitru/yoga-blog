import React from "react";
import downdog from "./img/downdog.jpeg";
import first from "./img/first.jpg";
import forwardfold from "./img/forwardfold.jpg";
import lunge from "./img/lunge.jpg";
import plank from "./img/plank.jpg";
import warrior from "./img/warrior.jpg";

export default function Home() {
  return (
    <div id="content">
      <div className="post-container">
        <div className="post">
          <div className="post-author">
            <img src={first} className="profile" alt="" />
            <br />
          </div>

          <p className="post-title">
            A warm welcome to
            <strong>
              <em>Yoga with Laura</em>
            </strong>
            , your place for Yoga poses, classes, tips, techniques and more.
            Yoga has the power to transform your body and your mind. Do you want
            the convenience of a Yoga class without leaving your house? Do you
            want to work on yourself, get healthier, fitter and stronger? Then
            look no further, we've got you covered with our life changing Yoga
            classes! If this sounds like something you are looking for, join our
            specially designed 45 minute classes to get fit, lose weight and
            feel amazing. We welcome all levels of Yoga into our community.
            Let's step onto the mat and build some healthy habits together!
          </p>
          <hr />
          <div className="post-content">
            <p>
              Take a sneak peak below into this month's article - Poses we love
              to practice!
            </p>
            <ul>
              <li>
                <h4>Forward Fold</h4>
                <p>
                  As you stand in <em>Mountain Pose</em>, place your hands on
                  your hips and inhale. As you exhale, soften your knees and
                  fold slowly forward from your hips. Your sit bones will be
                  pointing up to the ceiling and your hip points roll forward
                  into the upper thighs. This posture is great for relieving
                  tension in the spine, neck and back.
                </p>
                <img src={forwardfold} alt="" />
              </li>
              <hr />
              <h4>Warrior III</h4>
              <p>
                Begin standing in <em>Mountain Pose</em> with your feet
                hip-distance apart and your arms at your sides. Press your
                weight into your right foot, lift your left leg as you lower
                your torso, bringing your body parallel to the ground. Your arms
                can reach forward or back alongside your torso. Flex your left
                foot and reach out through your heel, as if you were pressing up
                against a wall behind you. Straighten your standing leg and hold
                this pose for 30 seconds. <em>Warrior III</em> helps build your
                balance and strength.
                <img src={warrior} alt="" />
              </p>

              <li>
                <hr />
                <h4>Downward Facing Dog</h4>
                <p>
                  To achieve this pose you can start on all fours. Set your
                  knees directly below your hips and the wrists underneath your
                  shoulders. Exhale, curl your toes under and push your hips up
                  and back into the air. Straighten your legs, spread your
                  fingers, let your head hang and move your shoulder blades away
                  from your ears towards your hips. This allows your body to
                  stretch fully.
                  <br />
                  If you struggle during this pose you can always place your
                  hands on yoga blocks.
                  <img src={downdog} alt="" />
                </p>
              </li>
              <li>
                <hr />
                <h4>Low Lunge</h4>
                <p>
                  Step your left foot forward as you exhale and place it in
                  between your hands. Lower your right knee to the floor and
                  slide your foot back until you feel a stretch in the right
                  hip. Make sure your hips stay low and are level with each
                  other. Engage your belly as you inhale and lift your chest
                  away from the thigh, sweeping your arms up alongside your ears
                  or place them on your leg. Exhale and lower your hands down
                  into a <em>Downward Facing Dog. </em>
                  <img src={lunge} alt="" />
                </p>
              </li>

              <li>
                <hr />
                <h4>Plank</h4>
                <p>
                  This pose is great for toning those abdominal muscles and
                  strengthening the arms, wrists and spine. Start on your hands
                  and knees with your wrists directly under your shoulders. Draw
                  your abdominal muscles towards your spine, tuck your toes
                  under and step back with your feet, bringing your body and
                  head into one straight line. Try to hold the pose for 5
                  breaths. To release, slowly lower back onto your knees.
                  <img src={plank} alt="" />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import styled from 'styled-components';

function Gym() {
  return (
    <FitnessGuideContainer>
      <Exercise>
        <h3>Push-ups</h3>
        <div> 
        <img src="/assets/img/fitness/pushups.png" alt="push-ups"/> <p>Push-ups are a great exercise for strengthening the upper body, including the chest, shoulders, and triceps.</p>
        <p>To perform a push-up:</p>
        <ol>
          <li>Start in a plank position with your hands shoulder-width apart and your body in a straight line from head to heels.</li>
          <li>Lower your body until your chest nearly touches the ground, keeping your elbows close to your sides.</li>
          <li>Push back up to the starting position, straightening your arms.</li>
          <li>Repeat for the desired number of repetitions.</li>
        </ol>
        </div>
      </Exercise>
      <Exercise>
        <h3>Squats</h3>
        <img src="/assets/img/fitness/Squats1.png" alt="Squats" />
        <p>Squats target the lower body, including the quadriceps, hamstrings, and glutes.</p>
        <p>To perform a squat:</p>
        <ol>
          <li>Stand with your feet shoulder-width apart, toes pointed slightly outward.</li>
          <li>Lower your body by bending your knees and pushing your hips back as if sitting into a chair.</li>
          <li>Keep your chest up and your knees tracking over your toes.</li>
          <li>Push through your heels to return to the starting position.</li>
          <li>Repeat for the desired number of repetitions.</li>
        </ol>
      </Exercise>
      <Exercise>
        <h3>Plank</h3>
        <img src="/assets/img/fitness/Plank.png" alt="Plank" />
        <p>The plank is a core-strengthening exercise that also engages the shoulders, arms, and legs.</p>
        <p>To perform a plank:</p>
        <ol>
          <li>Start in a push-up position, with your arms extended and hands directly beneath your shoulders.</li>
          <li>Engage your core and keep your body in a straight line from head to heels.</li>
          <li>Hold this position for as long as possible without allowing your hips to sag or your back to arch.</li>
          <li>Repeat for multiple sets.</li>
        </ol>
      </Exercise>
      <Exercise>
        <h3>Lunges</h3>
        <img src="/assets/img/fitness/lunges.png" alt="Lunges" />
        <p>Lunges target the quadriceps, hamstrings, glutes, and calves.</p>
        <p>To perform a lunge:</p>
        <ol>
          <li>Start by standing tall with your feet hip-width apart.</li>
          <li>Take a big step forward with one leg, keeping your spine straight.</li>
          <li>Lower your body until both knees are bent at a 90-degree angle.</li>
          <li>Push back up to the starting position and repeat on the other side.</li>
        </ol>
      </Exercise>
      <Exercise>
        <h3>Burpees</h3>
        <img src="/assets/img/fitness/Burpees.png" alt="Burpees" />
        <p>Burpees are a full-body exercise that combines strength training and aerobic conditioning.</p>
        <p>To perform a burpee:</p>
        <ol>
          <li>Start in a standing position.</li>
          <li>Lower into a squat position and place your hands on the floor.</li>
          <li>Jump your feet back into a plank position.</li>
          <li>Perform a push-up.</li>
          <li>Jump your feet back to the squat position.</li>
          <li>Jump explosively into the air, reaching your arms overhead.</li>
          <li>Land softly and repeat for the desired number of repetitions.</li>
        </ol>
      </Exercise>
    </FitnessGuideContainer>
  )
}

const FitnessGuideContainer = styled.div`
  padding: 20px;
  overflow-y: scroll;
`;

const Exercise = styled.div`
  margin-bottom: 40px;

  h3 {
    margin-left:20px;
    font-size: 40px;
    margin-bottom: 10px;
    font-weight:700;

  }

  img {
    max-width: 100%;
    height: auto;
    margin-bottom: 20px;
    margin-left:20px;
  }

  p {
    margin-bottom: 10px;
    margin-left:20px;

  }

  ol {
    margin-left: 20px;
    margin-bottom: 10px;
  }

  li {
    margin-bottom: 5px;
  }
`;
export default Gym

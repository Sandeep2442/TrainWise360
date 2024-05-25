import React from 'react';
import styled from 'styled-components';

function Fitness() {
  return (
    <ExerciseContainer>
    <ExerciseCard>
      <ExerciseImage src="/assets/img/fitness/close.webp" alt="Exercise 1" />
      <ExerciseTitle>Push-ups</ExerciseTitle>
      <ExerciseDescription>
        Push-ups are a great exercise for upper body strength.
      </ExerciseDescription>
    </ExerciseCard>
    <ExerciseCard>
      <ExerciseImage src="/assets/img/fitness/Bench-press1.gif" alt="Exercise 2" />
      <ExerciseTitle>Bench press</ExerciseTitle>
      <ExerciseDescription>The bench press or Chest press, is a weight trianing 
                         exercise where person a weight upwards while lying horizontally
                          on a weight training bench.
      </ExerciseDescription>
    </ExerciseCard>
    <ExerciseCard>
      <ExerciseImage src="/assets/img/fitness/anim.gif" alt="Exercise 3" />
      <ExerciseTitle>Biceps Excercises</ExerciseTitle>
      <ExerciseDescription>
        Up your arm day game with the best biceps workout that targets 
        every part of your arm, and increases the intensity to beast mode..
        </ExerciseDescription>
    </ExerciseCard>
    <ExerciseCard>
      <ExerciseImage src="/assets/img/fitness/aditya.jpeg" alt="Exercise 4" />
      <ExerciseTitle>Lunges</ExerciseTitle>
      <ExerciseDescription>Lunges target the legs and glutes.</ExerciseDescription>
    </ExerciseCard>
    <ExerciseCard>
      <ExerciseImage src="/assets/img/fitness/Crunches.gif" alt="Exercise 5" />
      <ExerciseTitle>Crunches</ExerciseTitle>
      <ExerciseDescription>Crunches help strengthen the abdominal muscles.</ExerciseDescription>
    </ExerciseCard>
    <ExerciseCard>
      <ExerciseImage src="/assets/img/fitness/Deadlifts1.gif" alt="Exercise 6" />
      <ExerciseTitle>Deadlifts</ExerciseTitle>
      <ExerciseDescription>Deadlifts are a compound exercise for the back and legs.</ExerciseDescription>
    </ExerciseCard>
  </ExerciseContainer>
  )
}

const ExerciseContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: scroll;
  margin-top:20px;
  margin-right:30px;
  margin-left:30px;
`;

const ExerciseCard = styled.div`
  width: calc(33.33% - 20px);
  margin-bottom: 40px;
  padding: 20px;
  background-color: #232323;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: calc(50% - 20px);
  }

  @media (max-width: 576px) {
    width: 100%;
  }
`;

const ExerciseImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const ExerciseTitle = styled.h3`
  font-size: 20px;
  margin-top: 20px;
  color:#ffff;
`;

const ExerciseDescription = styled.p`
  font-size: 16px;
  margin-top: 10px;
  color:#ffff;
`;

export default Fitness

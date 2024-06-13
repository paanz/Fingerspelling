import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import originalQuestions from './dataHandsign';
import "../styles/levelTwo.css"
import "../index.css"
import {
  Box,
  Text,
  Button,
  Image,
  Grid,
  GridItem,
  HStack,
  Container
} from '@chakra-ui/react';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function Kuiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); //300 seconds = 5 minutes
  const [active, setActive] = useState(true);
  const [lifelines, setLifelines] = useState({
    fiftyFiftyUsed: false
  });
  const [score, setScore] = useState(0);
  const [startTime, setStartTime] = useState(Date.now());
  const [secondChanceActive, setSecondChanceActive] = useState(false);
  const [optionsDisabled, setOptionsDisabled] = useState([]);

  useEffect(() => {
    const loadedQuestions = shuffleArray([...originalQuestions]);
    if (loadedQuestions.length > 0) {
      setQuestions(loadedQuestions);
    } else {
      console.error("No questions loaded!");
    }
  }, []);

  useEffect(() => {
    if (!active) {
      setTimeout(() => setActive(true), 10); // Wait for the animation to complete
    }
  }, [currentQuestion]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 1) {
          clearInterval(timer); // Clear interval when timer is about to hit zero
          setShowResults(true); // Show results when time is up
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Clean up the interval on component unmount
  }, []);

  const handleAnswerOptionClick = (option) => {
    const correct = questions[currentQuestion].answer === option;
    const endTime = Date.now();
    const timeTaken = (endTime - startTime) / 1000;
    let pointsEarned = 0;

    if (correct) {
      pointsEarned = calculateScore(timeTaken);
      updateStateAfterAnswer(correct, option, pointsEarned);
    } else if (secondChanceActive) {
      setOptionsDisabled([...optionsDisabled, option]);
    } else {
      updateStateAfterAnswer(correct, option, pointsEarned);
    }
  };

  function calculateScore(timeTaken) {
    const baseScore = 10; // Base score for a correct answer
    const timeBonus = Math.max(0, baseScore - Math.floor(timeTaken));
    return baseScore + timeBonus;
  }

  function updateStateAfterAnswer(correct, option, pointsEarned) {
    setScore(prevScore => prevScore + pointsEarned);
    setUserAnswers(prevUserAnswers => [...prevUserAnswers, {
      question: questions[currentQuestion].question,
      userAnswer: option,
      correctAnswer: questions[currentQuestion].answer,
      isCorrect: correct,
      imageUrl: questions[currentQuestion].imageUrl // Ensure imageUrl is stored in userAnswers
    }]);

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setStartTime(Date.now());
      setOptionsDisabled([]); // Clear disabled options for the next question
    } else {
      setShowResults(true);
    }

    setSecondChanceActive(false);
  }

  const handleSecondChance = () => {
    if (!lifelines.secondChanceUsed) {
      setLifelines({ ...lifelines, secondChanceUsed: true });
      setSecondChanceActive(true);
    }
  };

  const handleFiftyFifty = () => {
    if (!lifelines.fiftyFiftyUsed && questions.length > 0 && questions[currentQuestion].options.length > 2) {
      const correctOption = questions[currentQuestion].answer;
      let options = [...questions[currentQuestion].options];
      let filteredOptions = options.filter(option => option !== correctOption);

      while (filteredOptions.length > 1) {
        filteredOptions.splice(Math.floor(Math.random() * filteredOptions.length), 1);
      }

      const newQuestions = questions.map((question, index) => {
        if (index === currentQuestion) {
          return {
            ...question,
            options: [correctOption, ...filteredOptions]
          };
        }
        return question;
      });

      setQuestions(newQuestions);
      setLifelines({ ...lifelines, fiftyFiftyUsed: true });
    }
  };

  const sortedUserAnswers = userAnswers.sort((a, b) => {
    if (a.isCorrect === b.isCorrect) return 0;
    return a.isCorrect ? -1 : 1; // Sorting so correct answers come first
  });

  if (questions.length === 0) {
    return <div>Loading questions...</div>;
  }

  const current = questions[currentQuestion];
  if (!current) {
    return <div>Error: Question data is not available.</div>;
  }

  // console.log(current.imageUrl); // Debug current question's image URL

  return (
    <>
      <div style={{
        height: '100vh',
        overflow: 'hidden',
      }}>
        {showResults ? (
          <div className="results">
            <Text
              fontFamily={"VeniteAdoremusStraight"}
              color="white"
              fontSize="2xl"
              letterSpacing="1px"
            >
              Keputusan Kuiz
            </Text>
            <Text
              fontFamily={"VeniteAdoremusStraight"}
              color="white"
              fontSize="2xl"
              letterSpacing="3px"
              fontWeight="normal"
            >
              ~ Markah anda: {score} / {(questions.length * 10) + (questions.length * 10 - 10)} ~
            </Text>
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              {sortedUserAnswers.map((response, index) => (
                <GridItem w="100%" key={index}>
                  <Box
                    p={5} shadow="md"
                    borderWidth="1px"
                    borderRadius="md"
                    bg={response.isCorrect ? "green.100" : "red.100"}
                  >
                    {console.log(response.imageUrl)} {/* Debug image URL in results */}
                    <Image
                      src={response.imageUrl}
                      alt="Question visual content"
                      className="result-image"
                    />
                    <Text
                      // fontWeight="bold"
                    >
                      Q: Huruf apa yang ditunjukkan oleh tanda isyarat ini?
                    </Text>
                    <Text
                      fontWeight="bold">
                      Jawapan: {response.userAnswer} {response.isCorrect ? '✅' : '❌'}
                    </Text>
                    {!response.isCorrect && (
                      <Text fontWeight="bold" className="correct-answer">Jawapan betul: {response.correctAnswer}</Text>
                    )}
                  </Box>
                </GridItem>
              ))}
            </Grid>
            <Container centerContent p={8} position={'flex'}>
              <Link to="/menu/my"><Button>Kembali ke Menu Utama</Button></Link>
              <Link to="/leveltwo/my"><Button>Cuba Lagi!</Button></Link>
            </Container>
          </div>
        ) : (
          <div className={`question-container ${active ? 'active' : 'inactive'}`}>
            <Button
              disabled={lifelines.fiftyFiftyUsed}
              onClick={handleFiftyFifty}
              style={{ backgroundColor: lifelines.fiftyFiftyUsed ? 'grey' : 'gold' }}
              fontFamily={'SF Atarian System Extended Italic'}>
              Gunakan Talian Hayat 50/50
            </Button>
            <Button
              disabled={lifelines.secondChanceUsed}
              onClick={handleSecondChance}
              style={{ backgroundColor: lifelines.secondChanceUsed ? 'grey' : 'gold' }}
              fontFamily={'SF Atarian System Extended Italic'}>
              Aktifkan Peluang Kedua
            </Button>
            <div>
              <HStack>
                {questions[currentQuestion].imageUrl && (
                  <Image
                    src={questions[currentQuestion].imageUrl}
                    alt="Quiz Visual Content"
                    className="quiz-image"
                  />
                )}
                {questions[currentQuestion].videoUrl && (
                  <video
                    src={questions[currentQuestion].videoUrl}
                    alt="Quiz Video Content"
                    className="quiz-video"
                    autoPlay loop muted
                  />
                )}
              </HStack>
              <h1 fontFamily={'SF Atarian System Extended'}>
                {questions[currentQuestion].questionMY}
              </h1>
              {questions[currentQuestion].options.map((option, index) => (
                <Button
                key={index}
                onClick={() => handleAnswerOptionClick(option)}
                disabled={optionsDisabled.includes(option)}
                className="answer-option-leveltwo"
                style={{ color: "white", backgroundColor: optionsDisabled.includes(option) ? 'grey' : 'teal' }}
                  >
                  {option}
                </Button>
              ))}
            </div>
            <p>Skor: {score}</p>
            <p>Masa Tinggal: {Math.floor(timeLeft / 60)}:{(timeLeft % 60 < 10 ? '0' : '') + (timeLeft % 60)}</p>
          </div>
        )}
      </div>
    </>
  );
}

export default Kuiz;

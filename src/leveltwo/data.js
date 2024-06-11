import image1 from './oyen.jpg';

const questions = [
     {
       question: "What is the capital of France?",
       options: ["New York", "London", "Paris", "Berlin"],
       answer: "Paris"
     },
     {
          question: "What is this animal?",
          // imageUrl: "https://picsum.photos/id/237/200/300", // Replace this URL with the actual URL of the image
          imageUrl: image1,
          options: ["Dog", "Cat", "Rabbit", "Horse"],
          answer: "Cat"
     },
     {
       question: "What is 2 + 2?",
       options: ["3", "4", "5", "6"],
       answer: "4"
     },
     {
       question: "Who wrote 'Hamlet'?",
       options: ["Charles Dickens", "William Shakespeare", "Leo Tolstoy", "Mark Twain"],
       answer: "William Shakespeare"
     },
     // Add more questions here
     {
       question: "What is the tallest mammal?",
       options: ["Elephant", "Giraffe", "Horse", "Whale"],
       answer: "Giraffe"
     },
     {
       question: "Which planet is known as the Red Planet?",
       options: ["Mars", "Venus", "Jupiter", "Saturn"],
       answer: "Mars"
     },
     {
       question: "What is the chemical symbol for water?",
       options: ["H2O", "CO2", "NaCl", "O2"],
       answer: "H2O"
     },
     {
       question: "Who painted the Mona Lisa?",
       options: ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"],
       answer: "Leonardo da Vinci"
     },
     {
       question: "What is the powerhouse of the cell?",
       options: ["Nucleus", "Mitochondria", "Endoplasmic Reticulum", "Golgi Apparatus"],
       answer: "Mitochondria"
     },
     {
       question: "Which is the largest ocean on Earth?",
       options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
       answer: "Pacific Ocean"
     },
     {
       question: "Who is known as the father of computer science?",
       options: ["Alan Turing", "Steve Jobs", "Bill Gates", "Tim Berners-Lee"],
       answer: "Alan Turing"
     }
   ];
   
   export default questions;
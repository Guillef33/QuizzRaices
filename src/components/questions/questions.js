import RaicesBack1 from "../../assets/back1.jpg";
import RaicesBack2 from "../../assets/back2.png";
import RaicesBack3 from "../../assets/back3.jpeg";
import RaicesBack4 from "../../assets/back4.jpeg";
import RaicesBack5 from "../../assets/back5.jpeg";
import RaicesBack6 from "../../assets/back6.jpg";
import RaicesBack7 from "../../assets/back7.jpg";
import RaicesBack8 from "../../assets/back8.jpg";

const questions = [
  {
    questionText: "Which is the variety in Spain most planted?",
    answerOptions: [
      { answerText: "Garnacha", isCorrect: false },
      { answerText: "Airen", isCorrect: false },
      { answerText: "Bobal", isCorrect: true },
      { answerText: "Tempranillo ", isCorrect: false },
      { answerText: "Albariño ", isCorrect: false },
    ],
    image: RaicesBack1,
  },
  {
    questionText: "Which is the region where the Garnacha was born?",
    answerOptions: [
      { answerText: "Aragón", isCorrect: false },
      { answerText: "Cataluña", isCorrect: true },
      { answerText: "Rioja", isCorrect: false },
    ],
    image: RaicesBack2,
  },
  {
    questionText:
      "TALKING ABOUT ARAGON, WHICH OF THE FOLLOWING WINE REGIONS BELONG TO THE REGION?",
    answerOptions: [
      { answerText: "Calatayud", isCorrect: true },
      { answerText: "Utiel Requena", isCorrect: false },
      { answerText: "Campo de Borja", isCorrect: false },
      { answerText: "Yecla", isCorrect: false },
      { answerText: "Cariñena", isCorrect: true },
      { answerText: "Cigales", isCorrect: false },
      { answerText: "Somontano", isCorrect: false },
      { answerText: "Pla de bages", isCorrect: false },
      { answerText: "Arlanza", isCorrect: false },
      { answerText: "Bierzo", isCorrect: false },
    ],
    image: RaicesBack3,
  },
  {
    questionText: "SELECT 5 AUTOCHTHONOUS VARIETIES FROM SPAIN?",
    answerOptions: [
      { answerText: "Cigales", isCorrect: false },
      { answerText: "Somontano", isCorrect: false },
      { answerText: "Pla de bages", isCorrect: false },
      { answerText: "Arlanza", isCorrect: false },
      { answerText: "Bierzo", isCorrect: false },
      { answerText: "Calatayud", isCorrect: true },
      { answerText: "Utiel Requena", isCorrect: false },
      { answerText: "Campo de Borja", isCorrect: false },
      { answerText: "Yecla", isCorrect: false },
      { answerText: "Cariñena", isCorrect: true },
    ],
    image: RaicesBack4,
  },
  {
    questionText: " IS IT RUFETE RED, WHITE OR BOTH?",
    answerOptions: [
      { answerText: "White", isCorrect: false },
      { answerText: "Red", isCorrect: false },
      { answerText: "Both", isCorrect: false },
    ],
    image: RaicesBack5,
  },
  {
    questionText: "IS ALBARIN RELATED TO ALBARIÑO?",
    answerOptions: [
      { answerText: "Yes", isCorrect: false },
      { answerText: "No", isCorrect: false },
    ],
    image: RaicesBack6,
  },
  {
    questionText: "MALVAR IS A VARIETY THAT CAN BE FOUND IN?",
    answerOptions: [
      { answerText: "Madrid", isCorrect: false },
      { answerText: "Jerez", isCorrect: false },
      { answerText: "Galicia", isCorrect: false },
    ],
    image: RaicesBack7,
  },
  {
    questionText: "MAZUELA IS FROM?",
    answerOptions: [
      { answerText: "Rioja", isCorrect: false },
      { answerText: "Cariñena", isCorrect: false },
      { answerText: "Priorat", isCorrect: false },
      { answerText: "All", isCorrect: true },
    ],
    image: RaicesBack8,
  },
];

export default questions;

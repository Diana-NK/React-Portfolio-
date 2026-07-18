// data.js
import tictactoeImage from '../images/tictactoe-new.png';
import taskmanager from '../images/taskmanager.jpeg';
import littlelemon from '..//images/third-project.jpeg';
import expencetracker from '../images/expencetracker.png';
import diaryapp from '../images/DiarryApp2.jpg';

export const cardData = [
  {
    title: 'Little Lemon Restaurant',
    text: 'Restaurant with options for booking a table and ordering a food delivery',
    imgUrl: littlelemon, // Image URL
    link: 'https://diana-nk.github.io/my-little-lemon/',
  },
  {
    title: 'Tic-Tac-Toe',
    text: 'React project that recreates the very popular game Tic-Tac-Toe',
    imgUrl: tictactoeImage, // Image URL
    link: 'https://diana-nk.github.io/Tic-Tac-Toe-Game/',
    type: 'React',
  },
  {
    title: 'Task Manager',
    text: 'Application for organizing tasks and managing them.',
    imgUrl: taskmanager, // Image URL
    link: 'https://diana-nk.github.io/Task-Manager/',
  },
  {
    title: 'Expense Tracker',
    text: 'Frontend and Backend project with Python and JavaScipt. ',
    imgUrl: expencetracker, // Image URL
    link: ' https://expense-tracker-yrju.onrender.com',
  },
  {
    title: 'DiaryApp',
    text: 'Frontend and Backend project with C# and .NET. The web application is under construction ... ',
    imgUrl: diaryapp, // Image URL
  },
];

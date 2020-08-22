import React from 'react';
import s from "./App.module.css"
import './App.module.css';

function App() {
  return (
    <div className={s.container}>
      <div className={s.header}>
          <div className={s.headerMenu}>
              <div><a href="#">Главная</a></div>
              <div><a href="#">Скиллы</a></div>
              <div><a href="#">Работы</a></div>
              <div><a href="#">Контакты</a></div>
          </div>
      </div>
      <div className={s.block1}>Block1</div>
      <div className={s.block2}></div>
      <div className={s.block3}></div>
      <div className={s.block4}></div>
      <div className={s.block5}></div>
      <div className={s.footer}></div>
    </div>
  );
}

export default App;

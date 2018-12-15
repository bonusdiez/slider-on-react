import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// все имена функции с большой буквы
// function Hello() {
//   let phrase = "World"
//   return (
//     <h1>Hello {phrase}</h1>
//   )
// }

// function SayFullName(props) {
//   return (
//     <div>
//     <h2>Моё имя {props.name}, фамилия - {props.surname}</h2>
//     <a href={props.link}> Ссылка на мой профиль </a>
//     </div>
//   )
// }

// function MeetAll() {
//   return <div>
//       <SayFullName name="Robert" surname="Aglyamov" link="https://bonusdiez.ru" />
//       <SayFullName name="Vasya" surname="Pupkin" link="https://vk.com" />
//       <SayFullName name="Oleg" surname="Nemanov" link="https://fb.com" />
//     </div>
// }
ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render(<MeetAll/>, document.getElementById("root"));
// const element = <SayFullName name="Robert" surname="Aglyamov" link="https://bonusdiez.ru" />
// ReactDOM.render(<Hello />, document.getElementById('root'));
// ReactDOM.render(element, document.getElementById("root"));
// ReactDOM.render(
//   <SayFullName name="Robert" surname="Aglyamov" link="https://bonusdiez.ru" />,
//   document.getElementById("root")
// );
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

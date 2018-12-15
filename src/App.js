import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from "react-bootstrap/lib/Grid";
// import Row from "react-bootstrap/lib/Row";
// import Col from "react-bootstrap/lib/Col";
import styled from "styled-components";
import Header from './components/Header'
import Menu from './components/Menu'
import Main from './components/Main'

// достаем файлы из паблика ниже
const url = process.env.PUBLIC_URL + '/img/bg.jpg';

const HeaderWrapper = styled.header`
  width: 100%;
  height: 49px;
  background-color: #242424;
  opacity: 0.8;
`
const MenuWrapper = styled.div`
  height: 89px;
  padding-top: 20px;
`
const MainWrapper = styled.main`
  height: 600px;
  padding-top: 130px
  background: url(${url}) no-repeat;
  background-size: cover;
`


class App extends Component {
  render() {
    return (
      <div className="App">
      <HeaderWrapper>
        <Grid>
          <Header />
        </Grid>
      </HeaderWrapper>
      <MenuWrapper>
        <Grid>
          <Menu />
        </Grid>
      </MenuWrapper>
      <MainWrapper>
        <Grid>
          <Main / >
        </Grid>
      </MainWrapper>
        
      </div>

      // <div className="wrapper">
      //   <SayFullName name="Robert" surname="Aglyamov" link="https://bonusdiez.ru" />
      //   <SayFullName name="Vasya" surname="Pupkin" link="https://vk.com" />
      //   <SayFullName name="Oleg" surname="Nemanov" link="https://fb.com" />
      // </div>

      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
    );
  }
}
// ниже вставляем наши функции

function SayFullName(props) {
  return (
    <div>
      <h2>Моё имя {props.name}, фамилия - {props.surname}</h2>
      <a href={props.link}> Ссылка на мой профиль </a>
    </div>
  )
}

export default App;

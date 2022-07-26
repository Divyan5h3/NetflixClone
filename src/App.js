import logo from './logo.svg';
import './App.css';
import React,{useState} from 'react';
import requests from './requests';
import Row from './Row';
import Banner from './Banner';


function App() {

  const [count,setCount] = useState(0);
  return (
    <div className="app">
      <Banner /> 
      <Row title = "NETFLIX ORIGINALS" fetchUrl = {requests.fetchNetflixOriginals} />
      <Row title = "Trending" fetchUrl = {requests.fetchTrending} />
      <Row title = "Top Rated" fetchUrl = {requests.fetchTopRated} />
      <Row title = "Action Movies" fetchUrl = {requests.fetchActionMovies} />
      <Row title = "Comedy Movies" fetchUrl = {requests.fetchComedyMovies} />
      <Row title = "Horror Movies" fetchUrl = {requests.fetchHorrorMovies} />
      <Row title = "Romance Movies" fetchUrl = {requests.fetchRomanceMovies} />
      <Row title = "Documentary Movies" fetchUrl = {requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
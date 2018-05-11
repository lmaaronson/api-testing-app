import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//var unirest = require('unirest');
import axios from 'axios';
import cheerio from 'cheerio';
import request from 'request';

class App extends Component {

  handleScrapeClick = () => {
    console.log('scrape');
    request("https://cors.io/?https://www.indeed.com/jobs?q=front+end+developer&l=mn", function (error, response, html){
      //console.log('html', html);
      var $ = cheerio.load(html);

      $(".result").each(function(i, elements) {
        console.log('----------------------');

        var title = $(this).children('a').attr('title');
        console.log('title', title);

        var link = $(this).children('a').attr('href');
        console.log('link', link);

        request("https://cors.io/?https://www.indeed.com/" + link, function (error, response, html){
          //console.log('html', html);
          var $ = cheerio.load(html);

          let summary = $("#job_summary").html();
          console.log('summary', summary);

          /*let summary = $("#job_summary").children('p').each((i, el) => {
            console.log('this', $(this));
          })*/
          //console.log('summary', summary);

        });

      });
    });
  }






  

  handleClick = () => {

    //ec60bcc232163de84ac2e9289eca17f5
    let baseUrl = 'https://authenticjobs.com/api/?api_key=ec60bcc232163de84ac2e9289eca17f5&method=aj.jobs.search&keywords=html,css&perpage=100&format=json';
    let url = 'https://cors.io/?'
    axios.get(url + baseUrl)
      .then(res => {
        console.log('res', res);
        // console.log("listings.listing[0].title')
      });

    // arrow functions lexically bind the 'this' keyword
    /*const config = {
      headers: {
        'X-Mashape-Key': 'BipPw22zeXmshEnNE0H7msSVLrfkp1trKw1jsnZFh2ZO70PA3a',
        Accept: 'application/json'
      }
    };
    
    axios.get('https://community-angellist.p.mashape.com/follows/batch?ids=86500%2C173917', config)
    .then(function (result) {
      console.log(result.status, result.headers, result.body);
    });*/
    /*axios.get("https://community-angellist.p.mashape.com/follows/batch?ids=86500%2C173917")
    .header("X-Mashape-Key", "BipPw22zeXmshEnNE0H7msSVLrfkp1trKw1jsnZFh2ZO70PA3a")
    .header("Accept", "application/json")
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
    });*/

  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <button onClick={this.handleClick}>
          Front End (Authentic)
        </button>
        <br />
        <br />
        <button onClick={this.handleScrapeClick}>
          Front End (Scrape)
        </button>

        </p>
      </div>
    );
  }
}

export default App;

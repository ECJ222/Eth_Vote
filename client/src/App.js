import React, { Component } from "react";
import Election from "./contracts/Election.json";
import Web3 from 'web3';
import Contract from '@truffle/contract';
import image1 from './candidates/donald.jpg';
import image2 from './candidates/joe.jpg';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./globalstyles";
import { lightTheme, darkTheme } from "./theme";
import PieChart from './components/chart';
import {Button1} from './components/button';
import {ClipLoader} from "react-spinners";

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      candidateCount : 0,
      candidates : [],
      load : false,
      theme : localStorage.getItem('theme') || 'light',
      vote : [],
      votername : [],
      
    };



    this.images = [ image1, image2] //candidates

    if (Web3.currentProvider) {
        this.web3Provider = Web3.currentProvider; 
    }else{
        this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    }
    
    this.web3 = new Web3(this.web3Provider);
    
    this.election = Contract(Election);
    this.election.setProvider(this.web3Provider);
    this.setTheme = this.setTheme.bind(this);
  }

  componentDidMount(){
    this.web3.eth.getCoinbase((err, accounts) => {
      if(err){
        console.log(err);
      }
      //console.log(accounts); user account
      this.election.deployed().then(async (instance) => {
        this.app = instance;
        const res = await this.app.Count();
        //
        this.setState({
          candidateCount : res.words[0]
        })//get the number of candidates in the election

        for(let i = 1; i <= this.state.candidateCount; i += 1){
           const new_res = await this.app.voter(i);
           //
           this.setState((state) => {
            const candidates = state.candidates.concat({name : new_res.name, vote : new_res.vote.words[0]})

            return {
              candidates : candidates
            }

           })
           //
           
           this.setState((state) => {
            const vote = state.vote.concat(new_res.vote.words[0])

            return {
              vote : vote
            }

           })
           //

           this.setState((state) => {
            const votername = state.votername.concat(new_res.name)

            return {
              votername : votername
            }

           })
           //
        }
        this.setState({load : true}) //sets loader to true
      })
    })

    
  }

  setTheme(theme){

    this.setState({theme : theme})

  }
 
  render() {

    localStorage.setItem('theme', this.state.theme);

    if(this.state.votername.length > 0 && this.state.vote.length > 0){
      //if there are values within the array set it.
      this.votername = this.state.votername;
      this.vote = this.state.vote;

    }

    if(!this.state.load){

      return (

        <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme}>
            <>
              <GlobalStyles />

              <div className="loader"><ClipLoader color={"#2EB62C"} /></div>
            </>
        </ThemeProvider>

      );

    }else{
      return (
          <ThemeProvider theme={this.state.theme === 'light' ? lightTheme : darkTheme}>
            <>
              <GlobalStyles />
                <div className="container">
                    <h1>Election</h1>
                    <div className="card1">

                        <div id="theme-options-wrapper">

                            <div id="light-mode" onClick={() => this.setTheme("light")} className="theme-dot"></div>
                            <div id="dark-mode" onClick={() => this.setTheme("dark")} className="theme-dot"></div>

                            
                        </div>

                        <div id="candidateContainer">

                              {this.state.candidates.map((item, index) => (
                                
                                <div id="candidate" key={index}>

                                  <img src={this.images[index]} alt={item.name} />
                                  <br />
                                  <br />

                                  <span>{item.name}</span>

                                  <br />
                                  <br />

                                  <Button1  
                                    web3 = {this.web3}

                                    electionContract = {this.election} 

                                    id = {index} 

                                    Count = {this.state.candidateCount} 

                                    onVote = {(value) => this.setState({ vote : value })} 

                                    onVotername = {(value) => this.setState({ votername : value })}

                                  />
                                  

                                </div>
                              ))}

                        </div>

                    </div>

                    <PieChart name = {this.votername || []} vote = {this.vote || []}/>

                </div>
            </>
          </ThemeProvider>
    
      );
    }
  }
}

export default App;
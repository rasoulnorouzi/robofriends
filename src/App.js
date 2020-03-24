import React, {Component} from 'react';
import {robots} from './robots.js';
import CardList from './CardList.js';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll.js';
import './App.css';

class App extends Component {

    constructor(){
        super();
        this.state={
            robots:robots,
            searchfield:''
        }
    }

    onSearchChange=(event)=>{
        this.setState({searchfield: event.target.value})
    }

    render(){
        const filterRobots=this.state.robots.filter(robots=>{
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/> 
                <Scroll>
                    <CardList robots={filterRobots}/>
                </Scroll>
            </div>
        );
    }
}
    

export default App;
import React, { Component } from 'react';

import './App.css';
import './css/tailwind.css';
import DashboardHeader from './dashboard/DashboardHeader.js';
import SideToolbar from './side-toolbar/SideToolbar.js';
class App extends Component {
  render() {
    return (
      <div className="App">  
        <DashboardHeader></DashboardHeader>   
        <div className="flex flex-wrap">
          <article className="w-3/5 my-3">
            
          </article>   
          <aside className="w-2/5 my-3">
            <SideToolbar></SideToolbar>
          </aside>
        </div>
        
      </div>
    );
  }
}

export default App;

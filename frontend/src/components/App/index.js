import React, { Component } from 'react';
import Nav from '../navbar/Nav';
import SideBar from '../SideBar/SideBar';

class App extends Component {

  render() {
    return (
      <div className='wrapper'>
        <div>
          <Nav />
          <SideBar />
          <div className='content-wrapper'>
            {this.props.children}
          </div>
          <footer className='main-footer dark'>
            <strong>
              Copyright &copy; 2020
              <a href='' target='_blank' className="color-purple">Se chegue</a>
            </strong>
          </footer>
        </div>
      </div >
    )
  }
}

export default App;



import React from 'react';
import './styles/dashboard.css';
import Header from '../components/header/Header';
import SideBar from '../components/sidebar/SideBar';

const DashBoard = ({children}) => {
  console.log("children",children)
  return (
  <React.Fragment>
        <Header />
        <SideBar/>
      <div style={{paddingLeft:"250px"}}>
          <h1>DashBoard</h1>
          {children}
      </div>
    </React.Fragment>
  )
}

export default DashBoard
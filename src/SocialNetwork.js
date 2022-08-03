import './App.css';
import React from 'react';
import owl from './reentry-owl.jpg';

class SocialNetwork extends React.Component {
   render() {
    return (
      <div>
        <Header></Header>
        <div className="rowC">
          <Sidebar></Sidebar>
          <div className="middleBlock">

          </div>
          <Connections></Connections>
        </div>
        <Hello></Hello>
      </div>

    );
  }
}

function Hello () {
    const sayHello = () => {
      console.log("hello");
    };

  return (
      <div>
          <ul>
              <li>
              check in
              </li>
          </ul>
      </div> 
  );
}


 function Connections() {
      return (    
      <div className="right-box"> 
          <div> Connections </div> 
          {[...Array(8)].map(((n) => <Block></Block>))}   
      </div>
      );
  }



function Block() {
  return ( 
      <div className="rowC">
         <img src= "public/logo192.png"></img>
              <div className="colC">
                  <div> First Name & Last Name </div>
                  <div> Undergrad May 2023 </div>
                  <div> EECS </div>
              </div>
      </div>
  )
}


function Header() {
  return (<div> 
    <img src="https://berkeley-reentry.herokuapp.com/assets/reentry-owl-0957db2dd04486d63801ef01100558398264faec46b1da807b755f4e34f1772f.jpg"></img>
    <input></input>
</div>);
}
  


  function Sidebar(props) {
      return (<div className="box">
          <Circle></Circle>
          <div>{props.username}</div>
          <SideBox></SideBox>
      </div>);
  
  }


function Circle() {
      return(
          <div>
              <div className="circle"> </div>
          </div>
      );
  }


  function SideBox(props)  {
      return (<div>
          <div> Age: {props.age} </div>
          <div> Grad Year: {props.grad_year} </div>
          <div> Past Coursework: </div>
          <div> Current Coursework: </div>
          <div> Career Focus/Interest </div>
          <ul> 
               <li> Connections </li>
               <li> Contacts </li>
               <li> Following </li>
          </ul>
       </div>);
  }





export default SocialNetwork;
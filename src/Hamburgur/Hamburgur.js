import React , { Component } from 'react';
import Navbar from "../NavBar/Navbar";
import styled from "styled-components";

const Div = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 20px;
  right: 30px;
  z-index: 25;
  display: none;
  cursor: pointer;
  transition: all 0.3s ease-in;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    div {
      width: 2rem;
      height: 0.25rem;
      background-color: ${ props => props.open ? "white" : "blue"};
      border-radius: 10px;
      &:nth-child(1) {
        transform: ${ props => props.open ? "translateY(8px) rotate(45deg)" : "rotate(0)" };

      }

      &:nth-child(2) {
        transform: ${ props => props.open ? "translateX(-100%)" : "translateX(0)" };
        display: ${ props => props.open ? "none" : "initial"} ;
      }

      &:nth-child(3) {
        transform: ${ props => props.open ? "translateY(-8px) rotate(-45deg)" : "rotate(0)" };
      }
    }
`

class Hamburger extends Component {
    constructor () {
        super ();
        this.state = {
            open : false ,
        }
    }

    clickHandler = () => {
        this.setState ( {
            open : ! this.state.open ,
        } )
    }

    render () {
        return (
            <>
                <Div open={ this.state.open } onClick={ this.clickHandler }>
                    <div></div>
                    <div></div>
                    <div></div>
                </Div>
                <Navbar open ={this.state.open}/>
            </>
        );
    }
}

export default Hamburger;
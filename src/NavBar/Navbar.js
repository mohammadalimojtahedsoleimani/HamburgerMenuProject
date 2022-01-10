import React , { Component } from 'react';
import styled from "styled-components";

const UL = styled.ul`
  list-style: none;
  display: flex;
  justify-content: right;
  margin: 20px 50px;
  z-index: 21;
  

  li {
    padding: 18px 30px;

  }

  @media (max-width: 768px) {
    margin: 0;
    transition: all 0.3s linear;
    flex-direction: column;
    background-color: #1565df;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    li {
      color: aliceblue;
    }
    transform: ${props => props.open ? "translateX(0)":"translateX(100%)"};
    
  }
`

class Navbar extends Component {
    render () {
        const {open} = this.props
        return (
            <div>
                <UL open ={open}>
                    <li>Home</li>
                    <li>Docs</li>
                    <li>But me a coffe</li>
                    <li>Github</li>
                </UL>
            </div>
        );
    }
}

export default Navbar;
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { generateBG } from '../utils/bgAnim.js';
import {Helmet} from "react-helmet";

export default class HomeScreen extends Component {
  componentWillMount(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    var elemProps = generateBG(width, height, false);

    this.setState({
        ...elemProps
    })

    let resized = false
    window.addEventListener('resize', () => {
        if(!resized){
            resized = true;

            if(width !== window.innerWidth || height !== window.innerHeight){
                var elemProps = generateBG(window.innerWidth, window.innerHeight, true);
        
                this.setState({
                    ...elemProps
                })
            }
        }
        
    })
  }

  render() {
    return (
        <React.Fragment>
            <Helmet>
                <title>Pallavi Gupta.</title>
                <meta name="description" content="A creative designer and developer based in India." />
            </Helmet>

            <div className={`wrapper ${this.props.location.state && this.props.location.state.comeThru ? "no-bg" : ""}`}>
                <header>
                    <Link to={{pathname: "/", state: { ...this.props.location.state, comeThru: true }}}><h1>Pallavi Gupta.</h1><span></span></Link>
                    <div>
                        <span></span><span className="alt"></span>
                    </div>
                </header>
                
                <div className="main site-cont">
                    <div className="hero">
                        <h1 className="hi">hi! i'm mehedi.</h1>
                        <h1>a compsci undergrad, software engineer, and designer based in India.</h1>
                        <h2>i am passionate about building cutting-edge and elegant products designed to solve problems.</h2>
                        <Link to={{pathname: "/contact", state: { ...this.props.location.state, comeThru: true}}} className="services card">more about me <span className="arrow">-></span></Link>
                    </div>

                    <div className="children">
                        <div class="socials">
                            <a target="_blank" href="https://github.com/pallavi030">GitHub</a>
                            <a target="_blank" href="https://www.linkedin.com/in/pallavi-gupta-2035b2208/">LinkedIn</a>
                        </div>
                        <Link to={{pathname: "/projects", state: { ...this.props.location.state, comeThru: true}}}>
                            <div className="projects card">
                                <h2>view my projects</h2>
                            </div>
                        </Link>

                        <Link to={{pathname: "/meh", state: { ...this.props.location.state, comeThru: true }}}>
                            <div className="contact card">
                                <h2>personal details</h2>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className={"background-overlay anim " + this.state.resize } style={{gridTemplateColumns: "repeat(" + this.state.gridSizeX + ", 1fr"}}>
                    {   

                        [...Array(this.state.gridSizeX * this.state.gridSizeY)].map((e, i) => <span key={i}></span>)
                    }
                </div>
            </div>

            
           </React.Fragment>
    )
  }
}

import React,{ Component } from "react";
import AboutInfo from "./AboutInfo";
class About extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
    }
    render(){
        return(
        <div>
            <h1>About</h1>
            <AboutInfo name={"Mohit"} location={"Texas"}/>
        </div>
    );
    }
};

export default About;
import React from "react";
class AboutInfo extends React.Component{
    constructor(props){
        super(props);
    }
    async componentDidMount(){
        const data=await fetch("https://api.github.com/users/coderBhav");
        const json=await data.json();
        console.log(json);
    }
    render(){
        const {name, location}=this.props;
        return(
            <div>
                <h1>Name : {name}</h1>
                <h1>Location : {location}</h1>
                <h1>Contact : 9540447776</h1>
            </div>
        );
    }
};
export default AboutInfo;
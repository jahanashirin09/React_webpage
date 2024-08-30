import React,{Component } from "react";

class DummyPage extends Component{
    componentDidMount(){
        console.log("componentdidmount",this.props.name);
    }
    componentWillUnmount(){
        console.log("componentwillunmount",this.props.name);
    }
    componentDidUpdate(){
        console.log("component will update",this.props.name);
    }
    render(){
        return (
            <div>
                {this.props.name}

            </div>
        )
    }
}

export default DummyPage;
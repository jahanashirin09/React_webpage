import React from 'react'
import './addNew.css'



class AddNew extends React.Component{


    constructor(props){
        super(props);
        this.state={
            titleInput:'',
            descrInput:'',
            isActive:false
        }
    }
    handleChange=(evt)=>{
        const value=evt.target.value;
        this.setState({
            titleInput:value
        })

    }

    handleDescrChange=(evt)=>{
        const value=evt.target.value;
        this.setState({
            descrInput:value
        })
    }
    handleIsActiveChange=(evt)=>{
        const value=evt.target.value;
        this.setState({
            isActive:value
        })
    }

    handleClick=()=>{
        console.log(this.state);
        
    }
    
    render(){
        return(
            <div className='add-new'>
                <input placeholder="Title" value={this.state.titleInput} onChange={this.handleChange}/>
                <input placeholder='description' value={this.state.descrInput} onChange={this.handleDescrChange}/>
                <span>Is Active</span>
                <input type="checkbox" checked={this.state.isActive} onChange={this.handleIsActiveChange}/>

                <button onClick={this.handleClick}>Click</button>
                <button className='refresh' onClick={this.handleRefresh}>Refresh</button>
            </div>
        )
    }
}
export default AddNew;
import React from "react";
import Tool from '../components/tools';
import SimpleList from '../list/simpleList'


const MyContext=React.createContext();
const MyNewContext=React.createContext(500)
class Home extends React.Component{


    constructor(props){
        super(props);

        this.state={
            data:[],
            activeState:'all',
            showLabel:true
            
        }
    }
    componentDidMount(){
        console.log('componentDidmount');
        fetch('/data.json')
            .then((data)=>{
                return data.json()
            })
            .then((data)=>{
                this.setState({
                    data:data
                })
            })


        }
        handleRefresh(){
            console.log('refresh');
            fetch('/data2.json')
            .then((data)=>{
                return data.json()
            })
            .then((data)=>{
                this.setState({
                    data:data
                })
            })
        }
        componentDidUpdate(prevProps,prevState){
            if(prevState.message !== this.state.message){
                this.setState({
                    message:'message'
                })
            }
            
        }
        componentWillUnmount(){
            console.log('component unmount');

        }

   

    OnListChange=(event)=>{
        console.log(event.target.value);
        const value=event.target.value
       
        this.setState({
            activeState:value
        });
        
    }
    handleDelete=(item)=>{
        console.log('delete',item);
        const newList=this.state.data.filter((element)=>element.id !== item.id)

        this.setState({
            data:newList
        });
    }

    handleLabelClick=(arg)=>{
        this.setState({
            activeState:arg
        })
    }
    handleShowLabel=(evt)=>{
        this.setState({
            showLabel:evt.target.checked
        });

    }
    render(){
        const
        {
            data,
            activeState

            
        }=this.state
        const newList=data.filter((item)=>{
            if(activeState==='all'){
                return true;
            }
            else if(activeState==='active'){
                return item.isActive===true;
            }
            else if(activeState==='non-active'){
                return item.isActive===false
            }
            return false;

        });
        console.log(newList)
    return(
       
        <div>
            <div>
            <input checked={this.state.showLabel} onChange={this.handleShowLabel} type="checkbox"></input> show label
        

            </div>
            <MyNewContext.Provider value={100}>
                <MyContext.Provider value={this.state.showLabel}>
                     <Tool  labelVlue={activeState}onAction={this.OnListChange}>
                        <SimpleList data={newList} 
                             onAction={this.handleDelete} 
                             onLabelClick={this.handleLabelClick}/>
                    </Tool>
                </MyContext.Provider>
             </MyNewContext.Provider>
            </div>
        );}}
export default Home;
export{
    MyContext,
    MyNewContext
};
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/home';
import DummyPage from './pages/dummyPage';
import Usage from './pages/Usage';

class MyApp extends React.Component{
    constructor(props){
        super(props);
            this.state={
                currentSelected:'home'
            }
        }
    
    handleMenuSelect=(value)=>{
        console.log(value);
        this.setState({
            currentSelected:value
        });

    }
    getPage() {
        const{
            currentSelected
        }=this.state;

        switch(currentSelected){
            case 'home':
                return<Home/>
            case 'usage':
                return<Usage  name="usage"/>
            case 'settings':
                return <DummyPage  name="settings"/>
            case 'logout':
                return <DummyPage  name="logout"/>
            default:
                break;

        }
    }

    render(){
        return(
        <div className='app'>
        <Header onMenuSelect={this.handleMenuSelect}/>
        
          <div className='app-body'>
          {this.getPage()}
          
           </div>
           <Footer/>
    
      
         </div>
        );
    }
}
export default MyApp;

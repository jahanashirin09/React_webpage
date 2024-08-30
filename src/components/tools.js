import React from "react";
import AddNew from "./addNew";
import "./tools.css"



class Tool extends React.Component{
    render(){
        //return ''
    const{
        children,
        onAction,
        labelValue
    } =this.props;
    console.log(children)
    const onlyChild=React.Children.only(children);
    const count=React.Children.count(onlyChild.props.children);
   // return children

     return(
        <div className="list-tools">
            <div className="list-header">
                <select value={labelValue} onChange={onAction} name="status">
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="non-active">Non Active</option>

                </select>
                <AddNew/>
            </div>
            {children}
            <div className="list-footer">
                Total {count} items
            </div>

        </div>
        
     )
}


}
export default Tool;
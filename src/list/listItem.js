import React from 'react';
import Label from './label';
import "./labelitem.css"



function ListItem(props){
    const{
        title,
        descr,
        isActive,
        onDelete,
        onLabelClick
    }=props
    return (
      <div className='list-item'>
        
        <div className='list-title'>
          <h4>{props.title}</h4>
          <label onClick={onDelete}>Delete</label>
        </div>
        <div className='list-descr'>
          {props.descr}
        </div>
        <div className='list-label'>
            <Label isActive={isActive} onAction={onLabelClick}/>
         
        </div>
      </div>
    )
  }

  export default ListItem;
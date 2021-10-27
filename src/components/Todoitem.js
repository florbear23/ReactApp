import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Todoitem extends Component {

    getStyle = () =>{
        return {
            background:"#f4f4f4",
            padding:"10px",
            borderBottom:"2px #ccc dotted",
            textDecoration: this.props.todo.completed ? "line-through" : "none"
        };
    };


    render() {


        //deconstruct
        const { id, title} = this.props.todo;

        return (
            <div style={this.getStyle()}>
               <p>
                 <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} style={{marginRight:"10px"}} />{""}
                 {title}
                 <button style={btnStyle} onClick={this.props.delTodo.bind(this,id)} >
                     X
                </button>
                </p> 
            </div>
        )
    }
}

Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
  }


  const btnStyle = {
      background:"red",
      color:"#fff",
      border:"npne",
      padding:"5px 10px",
      borderRadius:"50%",
      cursor:"pointer",
      float:"right",
  }


export default Todoitem


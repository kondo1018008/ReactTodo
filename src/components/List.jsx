import React from 'react';

let style = { maxWidth: '700px' };
let btn = { cursor: 'pointer' };


const List = (props) => (
  <ul className="siimple-list">
    {props.todos.map((todo, i) => {
      return <div><li key={i} className="siimple-list-item siimple--bg-white" style={style}>
        {todo.title}&nbsp;&nbsp;
        <span class="siimple-grid"><em>Importance:&nbsp;</em>{todo.importance} </span >
        <button className="siimple-tag siimple-tag--error siimple-hover" style={btn} onClick={() => props.handleRemove(i)}>Delete</button>
                  </li>
      
      </div>
    })}
  </ul>
)

export default List;
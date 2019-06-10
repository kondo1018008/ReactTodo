import React from 'react';

let style = { maxWidth: '700px' };
let btn = { cursor: 'pointer' };


const List = (props) => (
  <ul className="siimple-list">
    {props.todos.map((todo, i) => {
      return <div><li key={i} className="listA" style={style}>
        {todo.title}&nbsp;&nbsp;
        <span className="imp"><u><em>Importance:&nbsp;&nbsp;</em>{todo.importance}</u> </span >
        <button className="siimple-tag siimple-tag--error siimple-hover" style={btn} onClick={() => props.handleRemove(i)}>Did</button>
                  </li>
      
      </div>
    })}
  </ul>
)

export default List;
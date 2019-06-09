import React from 'react';

let style = { maxWidth: '700px' };


const ListSearch = (props) => (
  <ul className="siimple-list">
    {props.todos.map((todo, i) => {
      return <div><li key={i} className="siimple-list-item siimple--bg-white" style={style}>
        {todo.title}&nbsp;&nbsp;
        <span class="siimple-grid"><em>Importance:&nbsp;&nbsp;</em>{todo.importance} </span >
                  </li>
      
      </div>
    })}
  </ul>
)

export default ListSearch;
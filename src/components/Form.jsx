import React from 'react'

const Form = (props) => (
  <form className="siimple-form" onSubmit={props.handleAdd}>
    <div className="siimple-form-field">
      <label className="siimple-label siimple--color-white">Your todo:</label>
      <input name="title" type="text" className="siimple-input" />　<input type="submit" value="Add" className="siimple-btn siimple-btn--teal" /><label className="siimple-label siimple--color-white">&nbsp;&nbsp;importance:</label>0<input name="importance" type="range" step="20" min="0" max="100"/>100
    </div>
  </form>
)

export default Form;
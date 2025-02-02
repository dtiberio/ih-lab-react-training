import React from 'react';
import './Todo.css';

function Todo(props) {
  const { todo } = props;
  const { id, title, completed } = todo;

  const completedClass = completed ? 'done' : 'undone';
  return (
    // Notice the ` ` in the className attribute. This is a template string.
    // It allows you to concatenate strings and variables in a more readable way.
    // In this case, the value of the completedClass variable is inserted into the className attribute.
    // update Todo.css to style the classes
    <div className={`todo ` + completedClass}>
      <div className="title">{title}</div>
    </div>
  );
}

export default Todo;

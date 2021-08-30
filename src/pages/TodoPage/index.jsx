import React, { useState, useContext } from 'react';
import { ThemeContext } from './../../contexts';
import TasksForm from './../../components/TasksForm';
import TasksList from './../../components/TasksList';
import styles from './TodoPage.module.scss';

function TodoPage (props) {
  const taskArr = useState([]);
  const theme = useContext(ThemeContext);

  return (
    <div className={theme ? styles.containerLight : styles.containerDark}>
      <h1 className={theme ? styles.headerLight : styles.headerDark}>
        ToDos... ({taskArr[0].length})
      </h1>
      <TasksForm taskArr={taskArr} {...props} />
      <TasksList taskArr={taskArr} {...props} />
    </div>
  );
}

export default TodoPage;

import React, { useState, useContext } from 'react';
import { ThemeContext } from './../../contexts';
import { Button } from 'react-bootstrap';
import TasksForm from './../../components/TasksForm';
import TasksList from './../../components/TasksList';
import styles from './TodoPage.module.scss';

function TodoPage (props) {
  const taskArr = useState([]);
  const theme = useContext(ThemeContext);

  const { changeTheme } = props;

  const formClasses = {
    inputData: styles.inputData,
  };

  const listClasses = {
    itemsContainer: styles.itemsContainer,
    listItemLight: styles.listItemLight,
    listItemDark: styles.listItemDark,
  };

  return (
    <div className={theme ? styles.containerLight : styles.containerDark}>
      <h1 className={theme ? styles.headerLight : styles.headerDark}>
        ToDos... ({taskArr[0].length})
      </h1>
      <Button
        className={styles.themeButton}
        variant={theme ? 'outline-info' : 'outline-danger'}
        onClick={changeTheme}
      >
        Change Theme
      </Button>
      <TasksForm taskArr={taskArr} formClasses={formClasses} {...props} />
      <TasksList taskArr={taskArr} listClasses={listClasses} {...props} />
    </div>
  );
}

export default TodoPage;

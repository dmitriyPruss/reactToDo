import { Formik, Form } from 'formik';
import React, { useState, useContext } from 'react';
import Input from '../../components/Input';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { ThemeContext } from './../../contexts';
import TasksForm from './../../components/TasksForm';
import TasksList from './../../components/TasksList';
import styles from './TodoPage.module.scss';

function TodoPage (props) {
  const { changeTheme } = props;
  const [tasks, setTasks] = useState([]);
  const theme = useContext(ThemeContext);

  return (
    <div className={theme ? styles.containerLight : styles.containerDark}>
      <h1 className={theme ? styles.headerLight : styles.headerDark}>
        ToDos... ({tasks.length})
      </h1>
      <TasksForm tasks={tasks} changeTheme={changeTheme} setTasks={setTasks} />
      <TasksList tasks={tasks} changeTheme={changeTheme} setTasks={setTasks} />
    </div>
  );
}

export default TodoPage;

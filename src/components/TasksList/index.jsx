import React, { useContext } from 'react';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { ThemeContext } from './../../contexts';
import { Button } from 'react-bootstrap';
import styles from './../../pages/TodoPage/TodoPage.module.scss';

function TasksList (props) {
  const {
    changeTheme,
    taskArr: [tasks, setTasks],
  } = props;
  const theme = useContext(ThemeContext);

  const mapTask = ({ id, body, isDone }, index) => {
    const deleteTask = id => {
      const deletedElem = tasks.findIndex(task => task.id === id);
      const newTasks = [...tasks];
      newTasks.splice(deletedElem, 1);
      setTasks(newTasks);
    };

    const checkTask = id => {
      const newTasks = tasks.map(task => {
        if (task.id === id) {
          task.isDone = !isDone;
        }
        return task;
      });

      setTasks(newTasks);
    };

    return (
      <li
        key={id}
        className={theme ? styles.listItemLight : styles.listItemDark}
      >
        <input type='checkbox' onClick={e => checkTask(id)} />
        <span>{body}</span>
        <Button
          variant={theme ? 'outline-success' : 'outline-light'}
          onClick={e => deleteTask(id)}
        >
          <DeleteOutlineIcon />
        </Button>
      </li>
    );
  };

  return <ul className={styles.itemsContainer}>{tasks.map(mapTask)}</ul>;
}

export default TasksList;

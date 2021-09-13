import React, { useContext } from 'react';
import { ThemeContext } from './../../contexts';
import TasksListItem from './TasksListItem';

function TasksList (props) {
  const {
    taskArr: [tasks, setTasks],
    listClasses: { itemsContainer },
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
      <TasksListItem
        key={id}
        id={id}
        body={body}
        checkTaskHandler={checkTask}
        deleteTaskHandler={deleteTask}
        listClasses={props.listClasses}
      />
    );
  };

  return <ul className={itemsContainer}>{tasks.map(mapTask)}</ul>;
}

export default TasksList;

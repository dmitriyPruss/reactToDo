import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { ThemeContext } from '../../contexts';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function TasksListItem (props) {
  const {
    id,
    body,
    checkTaskHandler,
    deleteTaskHandler,
    listClasses: { listItemLight, listItemDark },
  } = props;

  const theme = useContext(ThemeContext);

  return (
    <li className={theme ? listItemLight : listItemDark}>
      <input type='checkbox' onClick={e => checkTaskHandler(id)} />
      <span>{body}</span>
      <Button
        variant={theme ? 'outline-success' : 'outline-light'}
        onClick={e => deleteTaskHandler(id)}
      >
        <DeleteOutlineIcon />
      </Button>
    </li>
  );
}

export default TasksListItem;

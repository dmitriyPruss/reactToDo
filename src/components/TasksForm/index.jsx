import { Formik, Form } from 'formik';
import React, { useContext } from 'react';
import Input from '../../components/Input';
import { ThemeContext } from './../../contexts';
import { Button } from 'react-bootstrap';
import { INPUT_SCHEMA } from './../../utils/validatingSchemas';
import styles from './../../pages/TodoPage/TodoPage.module.scss';

function TasksForm (props) {
  const { changeTheme, setTasks, tasks } = props;

  const addTask = (values, formikBag) => {
    let stopFunc = null;
    tasks.forEach(task => {
      if (task.body === values.body.trim()) {
        stopFunc = true;
      }
    });
    if (stopFunc) {
      return;
    }

    const newTask = {
      id: Date.now(),
      body: values.body,
      isDone: false,
    };
    setTasks([...tasks, newTask]);

    formikBag.resetForm();
  };

  const theme = useContext(ThemeContext);

  return (
    <>
      <Button
        className={styles.themeButton}
        variant={theme ? 'outline-info' : 'outline-danger'}
        onClick={changeTheme}
      >
        Change Theme
      </Button>
      <Formik
        initialValues={{ body: '' }}
        validationSchema={INPUT_SCHEMA}
        onSubmit={addTask}
      >
        {formikProps => {
          return (
            <Form className={styles.inputData}>
              <Input name='body' theme={theme} placeholder='Enter Todo...' />
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default TasksForm;

import { Formik, Form } from 'formik';
import React, { useContext } from 'react';
import Input from '../../components/Input';
import { ThemeContext } from './../../contexts';
import { Button } from 'react-bootstrap';
import { INPUT_SCHEMA } from './../../utils/validatingSchemas';

function TasksForm (props) {
  const {
    taskArr: [tasks, setTasks],
    formClasses: { inputData },
  } = props;

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
      <Formik
        initialValues={{ body: '' }}
        validationSchema={INPUT_SCHEMA}
        onSubmit={addTask}
      >
        {formikProps => {
          return (
            <Form className={inputData}>
              <Input name='body' placeholder='Enter Todo...' />
              <Button
                variant={theme ? 'outline-success' : 'outline-light'}
                as='input'
                type='submit'
                value='Add Task'
              />
            </Form>
          );
        }}
      </Formik>
    </>
  );
}

export default TasksForm;

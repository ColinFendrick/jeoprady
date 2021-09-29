import { useState } from 'react';
import { useMutation } from 'react-query';

import { Button } from '@material-ui/core';
import { Modal, EditQuestionForm } from '..';

import useAppContext from '../../hooks/useAppContext';
import AppService from '../../services/AppService';

import useStyles from './styles';

const Question = ({ question, modalState }) => {
  const classes = useStyles();
  const { appState, setAppState } = useAppContext();
  const [editMode, toggleEditMode] = useState(false);
  const [, flipState] = modalState;

  const successHandler = ({ data }) => {
    setAppState(state => ({
      ...state,
      questions: data.data.questions,
      user: { ...state.user, ...data.data }
    }));
    flipState();
  };

  const { mutate: deleteQuestion } = useMutation(
    () => AppService.deleteQuestion(appState.user.accessToken)({ id: question._id }),
    {
      onSuccess: successHandler
    }
  );

  const { mutate: updateQuestion, isLoading } = useMutation(
    formData => AppService.updateQuestion(appState.user.accessToken)({ ...formData, id: question._id }),
    {
      onSuccess: successHandler
    }
  );

  return (
    <Modal modalState={modalState}>
      <div className={classes.paper}>
        {editMode ?
          <EditQuestionForm
            onSubmit={updateQuestion}
            question={question}
            isLoading={isLoading}
          />
          : <p id='transition-modal-description'>{question.question}</p>}
        <div>
          <Button variant='contained' onClick={() => toggleEditMode(!editMode)}>
            Edit Question
          </Button>

          <Button variant='outlined' onClick={deleteQuestion}>
            Delete Question
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Question;

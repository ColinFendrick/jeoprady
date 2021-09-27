import { useMutation } from 'react-query';

// import { Modal, Backdrop, Fade, Button } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Modal } from '..';

import useAppContext from '../../hooks/useAppContext';
import AppService from '../../services/AppService';

import useStyles from './styles';

const Question = ({ question, modalState }) => {
  const classes = useStyles();
  const { appState, setAppState } = useAppContext();

  const { mutate: deleteQuestion } = useMutation(
    () => AppService.deleteQuestion(appState.user.accessToken)({ id: question._id }),
    {
      onSuccess: ({ data }) => {
        setAppState(state => ({
          ...state,
          questions: data.data.questions,
          user: { ...state.user, ...data.data }
        }));
      }
    }
  );

  return (
    <Modal modalState={modalState}>
      <div className={classes.paper}>
        <p id='transition-modal-description'>{question.question}</p>
        <div>
          <Button variant='contained' onClick={deleteQuestion}>
            Delete Question
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default Question;

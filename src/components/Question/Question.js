import { useMutation } from 'react-query';

import { Modal, Backdrop, Fade, Button } from '@material-ui/core';

import useAppContext from '../../hooks/useAppContext';
import AppService from '../../services/AppService';

import useStyles from './styles';

const Question = ({ question, modalState }) => {
  const classes = useStyles();
  const { appState } = useAppContext();
  const [open, set] = modalState;

  const { mutate: deleteQuestion } = useMutation(
    () => AppService.deleteQuestion({ id: question._id })(appState.user.accessToken),
    {
      onSuccess: ({ data }) => {
        console.log('success', data);
      }
    }
  );

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      className={classes.modal}
      open={open}
      onClose={set}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}>
      <Fade in={open}>
        <div className={classes.paper}>
          <p id='transition-modal-description'>{question.question}</p>

          <div>
            <Button variant='contained' onClick={deleteQuestion}>
              Delete Question
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
};

export default Question;

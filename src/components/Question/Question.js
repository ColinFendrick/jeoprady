import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import useStyles from './styles';

const Question = ({ question, modalState }) => {
  const classes = useStyles();
  const [open, set] = modalState;

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
          <h2 id='transition-modal-title'>{question.title}</h2>
          <p id='transition-modal-description'>{question.content}</p>
        </div>
      </Fade>
    </Modal>
  );
};

export default Question;

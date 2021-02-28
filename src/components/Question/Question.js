import { useState } from 'react';

import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import useStyles from './styles';

const Question = ({ question }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const flipState = () => setOpen(!open);

  return (
    <>
      <button type='button' onClick={flipState}>
        react-transition-group
      </button>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        className={classes.modal}
        open={open}
        onClose={flipState}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}>
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id='transition-modal-title'>Transition modal</h2>
            <p id='transition-modal-description'>react-transition-group animates me.</p>
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default Question;

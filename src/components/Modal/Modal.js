import { Modal as MuiModal, Backdrop, Fade } from '@material-ui/core';

import makeStyles from './styles';

const Modal = ({ modalState, children }) => {
  const classes = makeStyles();
  const [open, setOpen] = modalState;

  return (
    <MuiModal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      className={classes.modal}
      open={open}
      onClose={setOpen}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}>
      <Fade in={open}>
        {children}
      </Fade>
    </MuiModal>
  );
};

export default Modal;

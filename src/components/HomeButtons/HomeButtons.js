import { Button } from '@material-ui/core';

import { AddQuestionForm, Modal } from '..';

import makeStyles from './styles';

const HomeButtons = ({ createQuestion, modalState, isLoading }) => {
  const classes = makeStyles();
  const [, flipState] = modalState;

  return (
    <>

      <div className={classes.row}>
        <Button variant='outlined' onClick={flipState}>
          Create Question
        </Button>
      </div>

      <Modal modalState={modalState}>
        <div className={classes.paper}>
          <AddQuestionForm onSubmit={createQuestion} isLoading={isLoading} />
        </div>
      </Modal>
    </>
  );
};

export default HomeButtons;

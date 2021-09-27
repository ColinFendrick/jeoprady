import { useState } from 'react';

import { Button } from '@material-ui/core';
import { AddQuestionForm, Modal } from '..';

import makeStyles from './styles';

const HomeButtons = ({ createQuestion, isLoading }) => {
  const classes = makeStyles();
  const [open, setOpen] = useState(false);
  const flipState = () => setOpen(!open);

  return (
    <>

      <div className={classes.row}>
        <Button variant='outlined' onClick={flipState}>
          Create Question
        </Button>
      </div>

      <Modal modalState={[open, flipState]}>
        <div className={classes.paper}>
          <AddQuestionForm onSubmit={createQuestion} isLoading={isLoading} />
        </div>
      </Modal>
    </>
  );
};

export default HomeButtons;

import { Button } from '@material-ui/core';

import { AddPlayerForm, Modal } from '..';

const PlayerButtons = ({ addUser, modalState, isLoading }) => {
  const [, flipState] = modalState;

  return (
    <>
      <Button variant='outlined' onClick={flipState}>
        Add Player
      </Button>

      <Modal modalState={modalState}>
        <AddPlayerForm onSubmit={addUser} isLoading={isLoading} />
      </Modal>
    </>
  );
};

export default PlayerButtons;

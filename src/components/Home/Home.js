import { useState } from 'react';
import { useQuery, useMutation } from 'react-query';

import AppService from '../../services/AppService';
import useAppContext from '../../hooks/useAppContext';

import { Tile, HomeButtons } from '..';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const { appState, setAppState } = useAppContext();
  const [open, setOpen] = useState(false);
  const flipState = () => setOpen(!open);

  const { mutate, isLoading } = useMutation(
    AppService.createQuestion(appState.user.accessToken),
    {
      onSuccess: ({ data }) => {
        setAppState(state => ({
          ...state,
          questions: data.data.questions
        }));
        flipState();
      }
    }
  );

  const createQuestion = async data => mutate(data);

  useQuery(
    'getQuestions',
    AppService.getQuestions(appState.user.accessToken),
    {
      onSuccess: ({ data }) => {
        setAppState(state => ({
          ...state, questions: data.data
        }));
      }
    }
  );

  return (
    <div className={classes.root}>
      {appState.questions.map((q, i) =>
        <Tile question={q} index={i} key={i} />
      )}

      <HomeButtons
        createQuestion={createQuestion}
        modalState={[open, flipState]}
        isLoading={isLoading}
      />
    </div>
  );
};


export default Home;

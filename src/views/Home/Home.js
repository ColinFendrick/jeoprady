import { useState } from 'react';
import { useQuery, useMutation } from 'react-query';

import AppService from '../../services/AppService';
import useAppContext from '../../hooks/useAppContext';

import { Tile, HomeButtons, PlayerButtons } from '../../components';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const { appState, setAppState } = useAppContext();
  const [cqOpen, setCqOpen] = useState(false);
  const [playerOpen, setPlayerOpen] = useState(false);

  const { mutate: cqMutation, isLoading: cqIsLoading } = useMutation(
    AppService.createQuestion(appState.user.accessToken),
    {
      onSuccess: ({ data }) => {
        setAppState(state => ({
          ...state,
          questions: data.data.questions
        }));
        setCqOpen(false);
      }
    }
  );

  const createQuestion = async data => cqMutation(data);

  const { mutate: addPlayerMutation, isLoading: addPlayerIsLoading } = useMutation(
    AppService.addPlayer(appState.user.accessToken),
    {
      onSuccess: ({ data }) => {
        setAppState(state => ({
          ...state,
          user: data
        }));
        setPlayerOpen(false);
      }
    }
  );

  const addUser = async data => addPlayerMutation(data);

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
        modalState={[cqOpen, setCqOpen]}
        isLoading={cqIsLoading}
      />

      <PlayerButtons
        addUser={addUser}
        modalState={[playerOpen, setPlayerOpen]}
        isLoading={addPlayerIsLoading}
      />
    </div>
  );
};


export default Home;

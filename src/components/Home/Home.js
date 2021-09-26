import { useQuery } from 'react-query';

import AppService from '../../services/AppService';
import useAppContext from '../../hooks/useAppContext';

import { Tile } from '..';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const { appState, setAppState } = useAppContext();

  useQuery(
    'getQuestions',
    () => AppService.getQuestions(appState.user.accessToken),
    {
      onSuccess: ({ data }) => {
        setAppState(state => ({ ...state, questions: data.data }));
      }
    }
  );

  return (
    <div className={classes.root}>
      {appState.questions.map((q, i) =>
        <Tile question={q} key={i} />
      )}
    </div>
  );
};


export default Home;

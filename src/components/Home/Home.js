import useAppContext from '../../hooks/useAppContext';

import { Tile } from '..';

import useStyles from './styles';

const Home = () => {
  const classes = useStyles();
  const { appState } = useAppContext();

  return (
    <div className={classes.root}>
      {appState.questions.map((q, i) =>
        <Tile question={q} key={i} />
      )}
    </div>
  );
};


export default Home;

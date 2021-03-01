import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    height: '95%',
    display: 'grid',
    gridTemplateColumns: '20% 20% 20% 20% 20%',
    gridTemplateRows: '20% 20% 20% 20% 20%'
  }
}));

export default useStyles;

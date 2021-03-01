import { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { Question } from '..';

import useStyles from './styles';

const Tile = ({ question }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const flipState = () => setOpen(!open);

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={flipState}>
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              {question.title}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Question question={question} modalState={[open, setOpen]} />
    </>
  );
};

export default Tile;

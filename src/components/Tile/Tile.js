import { useState } from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { Question } from '..';

import useStyles from './styles';

const Tile = ({
  question,
  index
}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const flipState = () => setOpen(!open);

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea onClick={flipState}>
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Question {index}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              {question.question}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Question question={question} modalState={[open, flipState]} />
    </>
  );
};

export default Tile;

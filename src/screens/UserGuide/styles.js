import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  text: {
    padding: theme.spacing(0, 1),
  },
  img: {
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '50%',
    paddingBottom: '05%',
  },
  ex1: {
    width: 1100,
    height: 300,
    overflow: 'scroll',
  },
}));

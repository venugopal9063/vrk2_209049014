import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    top:'50%',
    left: '50%',
    transform: 'translate3d(-50%,-50%, 0)',
    position: 'absolute'
  },
  paper: {
    padding: theme.spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    margin: 10,
  },
  select: {
    margin: 15
  },label: {
    display: "flex",
    justifyContent: 'space-between'
  },menuItem: {
    backgroundColor: "#FFD2D2",
  },span: {
    color:"#D8000C",
    fontWeight: 'bold'
  }
}));
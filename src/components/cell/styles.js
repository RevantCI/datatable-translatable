import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
  root: {},
  original: {
    paddingTop:'9px',
    padding: '0 8px',
    background: '#eee4',
    display: 'table-cell',
    width: '50%',
  },
  translation: {
    padding: '0 15px',
    background: '#eee4',
    display: 'table-cell',
    width: '50%',
  },
  subheading: {
    margin: '4% 5% 0% 5%',
    fontSize: '0.8em',
    fontStyle: 'italic',
  },
  rowHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #ccc',
    borderTop: '1px solid #ccc',
    padding: '0 24px',
    position: 'sticky',
    top: 100,
  },
  row: {
    display: 'table',
    width: '100%',
  },
  gridOriginal: {
    marginTop:'-15px',
    marginLeft:'2px',
    padding: '15px 10px 0px 28px'
  }
}));

export default useStyles;

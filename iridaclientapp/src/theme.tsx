import red from '@material-ui/core/colors/red';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#c9eb34',
    },
    secondary: {
      main: '#9e8bf4',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff'
    },    
  },
  spacing: 2
});

export default theme;
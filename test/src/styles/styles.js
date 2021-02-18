import { StyleSheet } from 'react-native';
import theme from './theme.style';
import themeStyle from './theme.style';

const styles = {

  headerTitle: {
    width: 250, 
    height: 40
  },

  homeScreenMainView: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: themeStyle.PRIMARY_COLOR
  }
};

export default StyleSheet.create(styles);

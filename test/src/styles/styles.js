import { StyleSheet } from 'react-native';
import theme from './theme.style';
import themeStyle from './theme.style';

const styles = {

  headerTitle: {
    width: 250, 
    height: 40
  },

  //Home screen related styles
  homeScreenMainView: {
    flex: 1, 
    backgroundColor: themeStyle.PRIMARY_COLOR
  },

  homeScreenTextView: {
    alignItems: 'center', 
    justifyContent: 'center',
    marginTop: 20
  },

  homeScreenText: {
    fontSize: 18
  },

  homeScreenStoryScrollView: {
    alignItems: 'center',
    paddingStart: 5,
    paddingEnd: 5
  },

  //Story component related styles
  storyComponentMainView: {
    height: 86,
    width: 86,
    margin: 10,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: themeStyle.DARK_GOLD_COLOR
  },

  storyComponentImage: {
    height: 82, 
    width: 82, 
    borderRadius: 40, 
    borderWidth: 2, 
    borderColor: themeStyle.PRIMARY_COLOR 
  },

  storyComponentOnlineDot: {
    height: 12, 
    width: 12, 
    borderRadius: 40,
    left: 77,
    bottom: 28
  }
};

export default StyleSheet.create(styles);

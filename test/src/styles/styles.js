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
  },

  //Card Component Styles
  cardComponentMainView: {
    backgroundColor: themeStyle.WHITE,
    borderRadius: 20,
    marginTop: 10
  },

  cardComponentDescriptionTextView: {
    marginHorizontal: 7
  },

  cardComponentDescriptionText: {
    color: themeStyle.LIGHT_GREY
  },


  //Image Icons Component Styles
  imageIconComponentMainView: {
    flex: 1,  
    margin: 10
  },

  imageIconComponentImage: {
    width: '100%', 
    height: 200, 
    borderRadius: 10
  },

  imageIconComponentIconsView: {
    flexDirection: 'row', 
    justifyContent: 'flex-start', 
    marginTop: 10
  },

  imageIconComponentTextView: {
    marginVertical: 25, 
    justifyContent: 'center', 
    alignItems: 'center'
  },

  imageIconComponentText: {
    fontWeight: '500'
  },


  //Logo Brand Date Component Styles
  logoBrandDateComponentMainView: {
    flexDirection: 'row'
  },

  logoBrandDateComponentStoryAndTextsView: {
    flexDirection: 'row'
  },

  logoBrandDateComponentBrandNameAndDateView: {
    justifyContent: 'center'
  },

  logoBrandDateComponentBrandNameText: {
    fontWeight: '500', 
    fontSize: 16
  },

  logoBrandDateComponentDateText: {
    opacity: 0.6, 
    fontSize: 10
  },

  logoBrandDateComponentIconView: {
    flex: 1, 
    alignItems: 'flex-end', 
    right: 20, 
    justifyContent: 'center'
  }
};

export default StyleSheet.create(styles);

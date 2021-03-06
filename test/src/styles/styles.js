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
    margin: 5,
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
    margin: 7,
    alignItems: 'center'
  },

  cardComponentDescriptionText: {
    color: themeStyle.LIGHT_GREY,
    lineHeight: 20
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
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 15
  },

  logoBrandDateComponentBrandNameAndDateView: {
    justifyContent: 'center',
    marginLeft: 10
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
  },

  logoBrandDateComponentComponentImage: {
    height: 70, 
    width: 70, 
    borderRadius: 40, 
    borderWidth: 2, 
    borderColor: themeStyle.PRIMARY_COLOR
  },

  //Button Component Styles
  buttonComponentMainView: {
    borderWidth: 1, 
    height: 30, 
    borderRadius: 5
  },

  buttonComponentButton: {
    alignItems: 'center', 
    top: 5, 
    width: 100
  },


  //Number and Text Component Styles
  numberTextComponentMainView: {
    flexDirection: 'row'
  },

  numberTextComponentUpperText: {
    fontWeight: "600", 
    fontSize: 25, 
    textAlign: 'center'
  },
  
  numberTextComponentLowerText: {
    color: themeStyle.LIGHT_GREY, 
    fontSize: 13
  },

  //Bottom Pop up Styles
  bottomPopupComponent: {
    borderRadius: 30
  },

  bottomPopupComponentImageAndDetails: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-around', 
    marginTop: 10
  },

  bottomPopupComponentTextViews: {
    marginLeft: 30, 
    marginTop: 10
  },

  bottomPopupComponentTextName: {
    fontWeight: 'bold', 
    fontSize: 20
  },

  bottomPopupComponentTextTags: {
    fontSize: 16
  },

  bottomPopupComponentTextBio: {
    fontSize: 14, 
    color: themeStyle.LIGHT_GREY, 
    lineHeight: 20
  },

  bottomPopupComponentButtonsMainView: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginTop: 30, 
    marginLeft: 20, 
    marginRight: 20
  },

  bottomPopupComponentIconButtonsView: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginVertical: 17,
  },

  bottomPopupComponentIconsMainView: {
    borderTopWidth: 0.4, 
    borderBottomWidth: 0.4,
    marginTop: 30,
    borderColor: themeStyle.LIGHT_GREY
  },


  //List Images Component
  listImagesComponentImage: {
    width: '100%', 
    height: '100%', 
    borderRadius: 10
  }
};

export default StyleSheet.create(styles);

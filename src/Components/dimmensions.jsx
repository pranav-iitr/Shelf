import {Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;


export const getWindowWidthPercentage = (percentage) => { return percentage*windowWidth/100 }
export const getWindowHeightPercentage = (percentage) => { return percentage*windowHeight/100 }
export const getScreenWidthPercentage = (percentage) => { return percentage*screenWidth/100 }
export const getScreenHeightPercentage = (percentage) => { return percentage*screenHeight/100 }
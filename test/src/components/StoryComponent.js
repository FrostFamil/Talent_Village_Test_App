import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import themeStyle from '../styles/theme.style';
import CircleImageComponent from './CircleImageComponent';



const StoryComponent = ({url, isOnline, onPressFunction}) => {

    return (
        <View >
            <TouchableOpacity style={styles.storyComponentMainView} onPress={onPressFunction}>
                <CircleImageComponent 
                    customStyle={styles.storyComponentImage}
                    url={url}
                />
            </TouchableOpacity>
            <View 
                style={{
                    ...styles.storyComponentOnlineDot, 
                    backgroundColor: isOnline ? themeStyle.ONLINE_COLOR : null
                }}
            />
        </View>
    )
}

export default StoryComponent;
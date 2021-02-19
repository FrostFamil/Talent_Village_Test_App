import * as React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/styles';
import themeStyle from '../styles/theme.style';
import CircleImageComponent from './CircleImageComponent';



const StoryComponent = ({url, isOnline}) => {

    return (
        <View>
            <View style={styles.storyComponentMainView}>
                <CircleImageComponent 
                    customStyle={styles.storyComponentImage}
                    url={url}
                />
            </View>
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
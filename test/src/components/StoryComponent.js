import * as React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/styles';
import themeStyle from '../styles/theme.style';



const StoryComponent = ({url, isOnline}) => {

    return (
        <View>
            <View style={styles.storyComponentMainView}>
                <Image 
                    style={styles.storyComponentImage}
                    source={{uri: url}}
                />
            </View>
            <View 
                style={{
                    ...styles.storyComponentOnlineDot, 
                    backgroundColor: isOnline ? themeStyle.ONLINE_COLOR : themeStyle.OFFLINE_COLOR
                }}
            />
        </View>
    )
}

export default StoryComponent;
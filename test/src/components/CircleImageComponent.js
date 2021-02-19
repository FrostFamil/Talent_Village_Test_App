import * as React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/styles';
import themeStyle from '../styles/theme.style';



const CircleImageComponent = ({url, customStyle}) => {

    return (
        <View>
            <Image 
                style={customStyle}
                source={{uri: url}}
            />
        </View>
    )
}

export default CircleImageComponent;
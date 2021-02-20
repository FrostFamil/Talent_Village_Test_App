import * as React from 'react';
import {View, Image} from 'react-native';


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
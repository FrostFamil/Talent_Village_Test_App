import * as React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../styles/styles';
import themeStyle from '../styles/theme.style';
import { Icon } from 'react-native-elements'



const ImageIconsComponent = ({url}) => {

    return (
        <View style={styles.imageIconComponentMainView}>

            <View>
                <Image
                    style={styles.imageIconComponentImage}
                    source={{uri: url}}
                />
            </View>

            <View style={styles.imageIconComponentIconsView}>
                <Icon
                    size={20}
                    name='hearto'
                    type='antdesign'
                />
                <Icon
                    size={20}
                    name='message1'
                    type='antdesign'
                    containerStyle={{marginLeft: 30}}
                />
                <Icon
                    size={20}
                    name='ios-send-sharp'
                    type='ionicon'
                    containerStyle={{marginLeft: 30}}
                />
            </View>

            <View style={styles.imageIconComponentTextView}>
                <Text style={styles.imageIconComponentText}>
                    I'm Interested
                </Text>
            </View>
        </View>
    )
}

export default ImageIconsComponent;
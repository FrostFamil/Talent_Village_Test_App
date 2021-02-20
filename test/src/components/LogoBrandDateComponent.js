import * as React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/styles';
import themeStyle from '../styles/theme.style';
import { Icon } from 'react-native-elements'
import CircleImageComponent from './CircleImageComponent';



const LogoBrandDateComponent = ({url, brandName, date}) => {

    return (
        <View style={styles.logoBrandDateComponentMainView}>

            <View style={styles.logoBrandDateComponentStoryAndTextsView}>
                <CircleImageComponent 
                    url={url}
                    customStyle={styles.logoBrandDateComponentComponentImage}
                />

                <View style={styles.logoBrandDateComponentBrandNameAndDateView}>
                    <Text style={styles.logoBrandDateComponentBrandNameText}>
                        {brandName}
                    </Text>
                    <Text style={styles.logoBrandDateComponentDateText}>
                        {date}
                    </Text>
                </View>
            </View>

            <View style={styles.logoBrandDateComponentIconView}>
                <Icon
                    size={27}
                    name='dots-horizontal-circle-outline'
                    type='material-community'
                    color={themeStyle.LIGHT_GREY}
                />
            </View>
        </View>
    )
}

export default LogoBrandDateComponent;
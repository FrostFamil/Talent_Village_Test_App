import * as React from 'react';
import {View, Image} from 'react-native';
import HEADER_TITLE from '../../../assets/Title.png';
import styles from '../../styles/styles';



const HeaderTitle = () => {

    return (
        <View>
            <Image
                style={styles.headerTitle}
                source={HEADER_TITLE}
            />
        </View>
    )
}

export default HeaderTitle;
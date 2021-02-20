import * as React from 'react';
import {View} from 'react-native';
import { Icon } from 'react-native-elements'

const HeaderRight = () => {

    return (
        <View style={{ right: 10 }}>
            <Icon
                size={27}
                name='notifications-outline'
                type='ionicon'
            />
        </View>
    )
}

export default HeaderRight;
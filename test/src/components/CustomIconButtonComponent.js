import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import themeStyle from '../styles/theme.style';
import { Icon } from 'react-native-elements'



const CustomIconButtonComponent = ({size, name, type, active, onPress}) => {

    return (
        <View>
          <Icon
            size={size}
            name={name}
            type={type}
            color={active ? themeStyle.BLACK:themeStyle.LIGHT_GREY}
            onPress={onPress}
          />
        </View>
    )
}

export default CustomIconButtonComponent;
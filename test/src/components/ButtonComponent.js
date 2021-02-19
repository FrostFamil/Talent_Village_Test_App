import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';
import themeStyle from '../styles/theme.style';



const ButtonComponent = ({text,pressFunction, textColor=themeStyle.BLACK, buttonBackgroundColor=null}) => {

    return (
        <View 
            style={{ 
                ...styles.buttonComponentMainView, 
                backgroundColor: buttonBackgroundColor, 
                borderColor: buttonBackgroundColor
        }}>
            <TouchableOpacity
                onPress={pressFunction}
                style={styles.buttonComponentButton}
            >
                <Text style={{color: textColor}}>
                    {text}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonComponent;
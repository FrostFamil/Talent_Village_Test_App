import * as React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/styles';
import themeStyle from '../styles/theme.style';
import {calculateNumberDivision} from '../utils/calculations';



const NumberTextComponent = ({data}) => {

    return (
        <View style={styles.numberTextComponentMainView}>
            <View>
                <Text style={styles.numberTextComponentUpperText}>{calculateNumberDivision(data.posts)}</Text>
                <Text style={styles.numberTextComponentLowerText}>Posts</Text>
            </View>

            <View style={{marginLeft: 20}}>
                <Text style={styles.numberTextComponentUpperText}>{calculateNumberDivision(data.talent_followers)}</Text>
                <Text style={styles.numberTextComponentLowerText}>Followers</Text>
            </View>

            <View style={{marginLeft: 20}}>
                <Text style={styles.numberTextComponentUpperText}>{calculateNumberDivision(data.talent_following)}</Text>
                <Text style={styles.numberTextComponentLowerText}>Following</Text>
            </View>
        </View>
    )
}

export default NumberTextComponent;
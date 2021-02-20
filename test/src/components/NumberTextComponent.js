import * as React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/styles';
import {calculateNumberDivision} from '../utils/calculations';
import { POSTS, FOLLOWERS, FOLLOWING } from '../utils/ConstantValues';



const NumberTextComponent = ({data}) => {

    return (
        <View style={styles.numberTextComponentMainView}>
            <View>
                <Text style={styles.numberTextComponentUpperText}>{calculateNumberDivision(data.posts)}</Text>
                <Text style={styles.numberTextComponentLowerText}>{POSTS}</Text>
            </View>

            <View style={{marginLeft: 20}}>
                <Text style={styles.numberTextComponentUpperText}>{calculateNumberDivision(data.talent_followers)}</Text>
                <Text style={styles.numberTextComponentLowerText}>{FOLLOWERS}</Text>
            </View>

            <View style={{marginLeft: 20}}>
                <Text style={styles.numberTextComponentUpperText}>{calculateNumberDivision(data.talent_following)}</Text>
                <Text style={styles.numberTextComponentLowerText}>{FOLLOWING}</Text>
            </View>
        </View>
    )
}

export default NumberTextComponent;
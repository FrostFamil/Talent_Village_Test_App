import * as React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/styles';
import { mergeTags } from '../utils/calculations';



const UserDescriptionComponent = ({name, tags, bio}) => {

    return (
        <View>
            <View style={styles.bottomPopupComponentTextViews}>
                <Text style={styles.bottomPopupComponentTextName}>
                    {name}
                </Text>
            </View>

            <View style={styles.bottomPopupComponentTextViews}>
                <Text style={styles.bottomPopupComponentTextTags}>
                    {mergeTags(tags)}
                </Text>
            </View>

            <View style={styles.bottomPopupComponentTextViews}>
                <Text style={styles.bottomPopupComponentTextBio}>
                    {bio}
                </Text>
            </View>
        </View>
    )
}

export default UserDescriptionComponent;
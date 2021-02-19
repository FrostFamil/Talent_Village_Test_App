import * as React from 'react';
import {View, Image} from 'react-native';
import styles from '../styles/styles';
import GridList from 'react-native-grid-list';



const ListImagesComponent = ({images}) => {

    return (
        <View>
            <GridList
                showSeparator
                separatorBorderWidth={10}
                data={images}
                numColumns={2}
                renderItem={({item}) => (
                    <Image 
                        style={styles.listImagesComponentImage} 
                        source={item}
                    />
                )}
            />
        </View>
    )
}

export default ListImagesComponent;
import * as React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles/styles';
import LogoBrandDateComponent from './LogoBrandDateComponent';
import ImageIconsComponent from './ImageIconsComponent';



const CardComponent = ({data}) => {

    return (
        <View style={styles.cardComponentMainView}>
            
            <View>
                <LogoBrandDateComponent 
                    url={data.campaign.brand_logo}
                    brandName={data.campaign.brand}
                    date={data.campaign.creation_date}
                />
            </View>

            <View style={styles.cardComponentDescriptionTextView}>
                <Text style={styles.cardComponentDescriptionText}>
                    {data.campaign.strapline}
                </Text>
            </View>

            <View>
                <ImageIconsComponent 
                    url={data.hero_image}
                />
            </View>
        </View>
    )
}

export default CardComponent;
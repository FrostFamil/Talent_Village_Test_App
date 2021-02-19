import React, {useEffect} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from '../styles/styles';
import StoryComponent from '../components/StoryComponent';
import list_response from '../mockData/list_response.json';
import sheet_response from '../mockData/sheet_response.json';
import CardComponent from '../components/CardComponent';
import BottomPopupComponent from '../components/BottomPopupComponent';
import FetchData from '../utils/FetchData';
import { WELCOME_MESSAGE } from '../utils/ConstantValues';



const HomeScreen = () => {

    const {fetch, response, loading, error} = FetchData();

    useEffect(() => {
        //Here usually will be custom fetch hook to handle the api requests.

        //something like this which accepts url, body, http request type, optional headers if needed
        //Example: fetch('example url', 'body', 'post', 'headers');

        //while calling this custom hook gives us ability to access response, loading, error of this current request
        
        //and reduce the redudency of creataing states in every file for these and set them everytime we do API request
    }, [])

    return (
        <View style={styles.homeScreenMainView}>
            <View style={styles.homeScreenTextView}>
                <Text style={styles.homeScreenText}>
                    {WELCOME_MESSAGE}
                </Text>
            </View>

            <View style={{marginTop: 20}}>
                <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.homeScreenStoryScrollView}
                >
                    {list_response.data.new_users.map(data => (
                        <StoryComponent
                            key={data.id} 
                            url={data.image_url}
                            isOnline={data.isOnline}
                            onPressFunction={() => this.refRBSheet.openPopup()}
                        />
                    ))}
                </ScrollView>
            </View>

            <View style={{margin: 20, flex: 1}}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {list_response.data.campaigns.map(data => (
                        <CardComponent
                            key={data.campaign.id}
                            data={data} 
                        />
                    ))}
                </ScrollView>
            </View>

            <View>
                <BottomPopupComponent
                    refRBSheet={ref => (this.refRBSheet = ref)}
                    responseData={sheet_response}
                />
            </View>
        </View>
    )
}

export default HomeScreen;
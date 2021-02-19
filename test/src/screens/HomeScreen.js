import React, {useEffect, useState, useRef} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from '../styles/styles';
import StoryComponent from '../components/StoryComponent';
import list_response from '../mockData/list_response.json';
import sheet_response from '../mockData/sheet_response.json';
import CardComponent from '../components/CardComponent';
import BottomPopupComponent from '../components/BottomPopupComponent';



const HomeScreen = () => {

    const [response, setResponse] = useState({});

    useEffect(() => {
        //Here usually will be custom fetch hook to handle the api requests.

        setResponse(list_response);
    }, [])

    return (
        <View style={styles.homeScreenMainView}>
            <View style={styles.homeScreenTextView}>
                <Text style={styles.homeScreenText}>
                    Welcome to the Community
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
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import styles from '../styles/styles';
import StoryComponent from '../components/StoryComponent';
import list_response from '../mockData/list_response.json';



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
                        />
                    ))}
                </ScrollView>
            </View>
        </View>
    )
}

export default HomeScreen;
import * as React from 'react';
import {View, Text, Dimensions, ScrollView} from 'react-native';
import styles from '../styles/styles';
import RBSheet from "react-native-raw-bottom-sheet";
import StoryComponent from './StoryComponent';
import NumberTextComponent from './NumberTextComponent';
import themeStyle from '../styles/theme.style';
import ButtonComponent from './ButtonComponent';
import UserDescriptionComponent from './UserDescriptionComponent';
import { Icon } from 'react-native-elements'
import ListImagesComponent from './ListImagesComponent';

const deviceHeight = Dimensions.get('window').height;

class BottomPopupComponent extends React.Component {

    componentDidMount() {
        const { refRBSheet } = this.props;
        refRBSheet(this);
    }
    componentWillUnmount() {
        const { refRBSheet } = this.props;
        refRBSheet(undefined);
    }

    openPopup = () => {
        this.RBSheet.open()
    }

    render() {
        const {responseData} = this.props;
        const {bio, profile_image, name, tags, is_following, uploaded_images} = responseData.data;

        return (
            <View>
                <RBSheet
                    ref={ref => {this.RBSheet = ref}}
                    height={deviceHeight/1.4}
                    customStyles={{
                        container: {
                            ...styles.bottomPopupComponent
                        }
                    }}
                >
                    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                        <View style={styles.bottomPopupComponentImageAndDetails}>
                            <StoryComponent 
                                url={profile_image}
                            />
                            <NumberTextComponent 
                                data={responseData.data}
                            />
                        </View>

                        <View>
                            <UserDescriptionComponent 
                                name={name}
                                tags={tags}
                                bio={bio}
                            />
                        </View>

                        <View style={styles.bottomPopupComponentButtonsMainView}>
                            <ButtonComponent 
                                text={is_following ? "Following" : "Follow"}
                                buttonBackgroundColor={themeStyle.DARK_GOLD_COLOR}
                                textColor={themeStyle.WHITE}
                            />
                            <ButtonComponent 
                                text={"Chat"}
                            />
                            <ButtonComponent 
                                text={"Profile"}
                            />
                        </View>

                        <View style={styles.bottomPopupComponentIconsMainView}>
                            <View style={styles.bottomPopupComponentIconButtonsView}>
                                <Icon
                                    size={30}
                                    name='image'
                                    type='entypo'
                                />

                                <Icon
                                    size={30}
                                    name='videocam-sharp'
                                    type='ionicon'
                                />

                                <Icon
                                    size={30}
                                    name='bookmark-outline'
                                    type='ionicon'
                                />
                            </View>
                        </View>

                        <View>
                            <ListImagesComponent 
                                images={uploaded_images}
                            />
                        </View>
                    </ScrollView>
                </RBSheet>
            </View>
        )
    }
}

export default BottomPopupComponent;
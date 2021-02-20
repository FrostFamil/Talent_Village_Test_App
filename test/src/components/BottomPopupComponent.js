import * as React from 'react';
import {View, Dimensions, ScrollView} from 'react-native';
import styles from '../styles/styles';
import RBSheet from "react-native-raw-bottom-sheet";
import StoryComponent from './StoryComponent';
import NumberTextComponent from './NumberTextComponent';
import themeStyle from '../styles/theme.style';
import ButtonComponent from './ButtonComponent';
import UserDescriptionComponent from './UserDescriptionComponent';
import ListImagesComponent from './ListImagesComponent';
import CustomIconButtonComponent from './CustomIconButtonComponent';
import { FOLLOWING, FOLLOW, CHAT, PROFILE } from '../utils/ConstantValues';

const deviceHeight = Dimensions.get('window').height;

class BottomPopupComponent extends React.Component {

    state = {
        imageIcon: true,
        videoIcon: false,
        bookmarkIcon: false
    }

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

    imageIconPressed = () => {
        this.setState({
            imageIcon: true,
            videoIcon: false,
            bookmarkIcon: false
        })
    }

    videoIconPressed = () => {
        this.setState({
            imageIcon: false,
            videoIcon: true,
            bookmarkIcon: false
        })
    }

    bookmarkIconPressed = () => {
        this.setState({
            imageIcon: false,
            videoIcon: false,
            bookmarkIcon: true
        })
    }

    render() {
        const {responseData} = this.props;
        const { imageIcon, videoIcon, bookmarkIcon } = this.state;
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
                                text={is_following ? FOLLOWING : FOLLOW}
                                buttonBackgroundColor={themeStyle.DARK_GOLD_COLOR}
                                textColor={themeStyle.WHITE}
                            />
                            <ButtonComponent 
                                text={CHAT}
                            />
                            <ButtonComponent 
                                text={PROFILE}
                            />
                        </View>

                        <View style={styles.bottomPopupComponentIconsMainView}>
                            <View style={styles.bottomPopupComponentIconButtonsView}>
                                <CustomIconButtonComponent 
                                    size={30}
                                    name='image'
                                    type='entypo'
                                    active={imageIcon}
                                    onPress={this.imageIconPressed}
                                />

                                <CustomIconButtonComponent 
                                    size={30}
                                    name='videocam-sharp'
                                    type='ionicon'
                                    onPress={this.videoIconPressed}
                                    active={videoIcon}
                                />

                                <CustomIconButtonComponent 
                                    size={30}
                                    name='bookmark-outline'
                                    type='ionicon'
                                    onPress={this.bookmarkIconPressed}
                                    active={bookmarkIcon}
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
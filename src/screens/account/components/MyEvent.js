import React, {useEffect} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
    Platform
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {Button} from 'native-base';
import moment from 'moment';

import {CommonStyles, Typography} from '../../../theme';
import {getAsyncStorage} from '../../../utils/storageUtil';
import {JWT_TOKEN} from '../../../constants';
import {decodeUserID} from '../../../utils/jwtUtil';
import {PRIMARY_BACKGROUND_COLOR} from '../../../theme/colors';
import {BubblesLoader} from "react-native-indicator";
import * as Colors from "../../../theme/colors";

const Profile = (props) => {
    const {
        navigation,
        profileEvent,
        profileEventLoading,
        profileEventError,
        fetchEventsByUserIdentifier,
        cleanProfileEvent,
    } = props;

    useEffect(() => {
        const fetchProfileEventAsync = async () => {
            let token = await getAsyncStorage(JWT_TOKEN);
            let userID = decodeUserID(token);
            await fetchEventsByUserIdentifier(userID);
        };
        fetchProfileEventAsync();

        return () => {
            cleanProfileEvent();
        };

    }, []);

    const _renderItem = ({item, index}) => {
        const actualDate = moment(item?.event_start).format('LLLL').split(',', 6);
        const date = actualDate[1].split(' ', 3);

        return (
            <View key={index}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('EventDetail', {id: item.ID})}>
                    <View style={styles.middleWrapper}>

                        <View style={[styles.wrapper]}>

                            <Text style={styles.text}>{item.title}</Text>

                            <Text style={{fontSize: 6, fontFamily: Typography.FONT_SF_REGULAR,}}>Hosted
                                by {item?.organizer?.term_name} {item?.organizer?.description}</Text>
                            <View style={styles.iconWrapper}>
                                <Ionicon
                                    name={'person'}
                                    size={15}
                                    color="#0B0B45"

                                />
                                <Text style={styles.text}/>
                                <Ionicon
                                    name={'calendar'}
                                    size={15}
                                    color="#0B0B45"
                                    style={{marginLeft: 20}}

                                /><Text style={styles.text}>{date[2]} {date[1]}</Text>
                            </View>
                            <View style={styles.iconWrapper}>
                                <Ionicon
                                    name={'time'}
                                    size={15}
                                    color="#0B0B45"
                                /><Text
                                style={styles.text}>{item?.event_meta._start_hour[0]}:{item?.event_meta._start_minute[0]}{item.event_meta._start_ampm[0]}</Text>
                                <Ionicon
                                    name={'location'}
                                    size={15}
                                    color="#0B0B45"
                                    style={{marginLeft: 20}}

                                />
                                <Text style={styles.text}>{item.location?.location_address}</Text>
                            </View>

                        </View>
                        <Button style={{height: 35, top: 40, backgroundColor: '#183863', borderRadius: 15,}}>
                            <Text style={{fontSize: 10, color: PRIMARY_BACKGROUND_COLOR}}>Upcoming</Text></Button>

                    </View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <>
            {profileEventLoading && (
                <>
                    <View style={{
                        flex: 1,
                        alignItems: 'center',
                        flexDirection: 'column',
                        justifyContent: 'space-around',
                        position: 'absolute',
                        zIndex: 1011,
                        top: 120,
                        left: 120
                    }}>
                        <BubblesLoader color={Colors.SECONDARY_TEXT_COLOR} size={80}/>
                    </View>
                </>
            )}
            <FlatList
                Vertical
                showsVerticalScrollIndicator={false}
                data={profileEvent}
                renderItem={_renderItem}
            />
        </>
    );

};

const styles = StyleSheet.create({
    container: {
        ...CommonStyles.container,
        backgroundColor: PRIMARY_BACKGROUND_COLOR,
        paddingLeft: 20,
        paddingRight: 20,
        justifyContent: 'center',
        alignContent: 'center'
    },
    header: {
        alignItems: 'center',
    },
    icon: {
        width: 110,
        height: 110,
        borderColor: PRIMARY_BACKGROUND_COLOR,
        borderRadius: 16,
        borderWidth: 3,
        overflow: "hidden",
        position: "absolute",
        top: -35,
    },
    text: {
        color: '#343537',
        marginLeft: 5,
        fontFamily: Typography.FONT_SF_REGULAR,
    },
    headingText1: {
        ...CommonStyles.headingText1,
        fontFamily: Typography.FONT_NORMAL,
        fontSize: 22,
        fontWeight: '600',
    },
    profileWrapper: {
        padding: 20,
        alignItems: "center",
        width: 328,
        backgroundColor: PRIMARY_BACKGROUND_COLOR,
        borderRadius: 12,
        position: "relative",
        paddingTop: 100,
        borderWidth: 1,
        borderColor: '#707070'
    },
    middle: {
        justifyContent: 'center',
        alignContent: 'center',
    },
    wrapper: {
        width: Platform.OS === 'ios' ? "65%" : "70%",
        marginLeft: 10,
        marginTop: 10,
    },
    middleWrapper: {
        paddingBottom: 20,
        width: "100%",
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        borderWidth: 0.5,
        marginTop: 20,
    },
    middleImage: {
        width: 40,
        height: 40,
        backgroundColor: '#3A9BDC',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 10,
    },
    middleImage1: {
        width: 40,
        height: 40,
        backgroundColor: '#d7d7d7',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 10,
    },
    menuText: {
        fontSize: 14, fontWeight: '500', margin: 15
    },
    buttonWrapper: {
        width: 267,
        height: 50,
        backgroundColor: "#ECECEC",
        borderRadius: 10,
        margin: 10,
        marginTop: 15,
        marginLeft: Platform.OS === 'ios' ? 10 : 40,
    },
    iconWrapper: {
        display: 'flex',
        flexDirection: 'row',
        marginLeft: 10,
        marginTop: 10,
    },
    shadowProp: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
});

export default Profile;


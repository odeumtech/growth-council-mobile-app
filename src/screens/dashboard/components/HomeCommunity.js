import React, {useEffect, useCallback, useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  StatusBar,
  PermissionsAndroid,
} from 'react-native';

import moment from 'moment';
import {Linking} from 'react-native';
import {Toast, useToast} from 'native-base';
import RNFetchBlob from 'react-native-blob-util';
import analytics from '@react-native-firebase/analytics';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Material from 'react-native-vector-icons/MaterialIcons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';

import Player from './Player';
import Loading from '../../../shared/loading';
import ToastMessage from '../../../shared/toast';
import {decodeUserID} from '../../../utils/jwtUtil';
import BottomNav from '../../../layout/BottomLayout';
import FloatingButton from '../../../shared/floatingButton';
// import ReactNativeBlobUtil from 'react-native-blob-util';
import {CommonStyles, Colors, Typography} from '../../../theme';
import {GROWTH_COMMUNITY_ID, JWT_TOKEN} from '../../../constants';

const win = Dimensions.get('window');
const contentContainerWidth = win.width - 30;

const HomeCommunity = props => {
  const {
    route,
    navigation,

    communityMembers,
    communityMemberLoading,
    communityMemberError,
    fetchAllCommunityMember,
    cleanCommunityMember,


    pillarPOEs,
    pillarPOELoading,
    pillarPOEError,
    fetchAllPillarPOE,
    cleanPillarPOE,


    memberConnections,
    memberConnectionLoading,
    memberConnectionError,
    connectMemberByIdentifier,
    cleanConnectMember,

    regionEvents,
    regionEventLoading,
    regionEventError,
    fetchEventRegion,
    cleanEventRegion,

    profile,
    // profileLoading,
    // profileError,
    // fetchProfile,
    // cleanProfile,
  } = props;

  const pillarId = GROWTH_COMMUNITY_ID;

  const isFocused = useIsFocused();

  let region = profile?.user_meta?.region;
  if (typeof region === 'undefined' || region === null) {
    region = ' ';
  } else {
    region = profile?.user_meta?.region[0];
  }



  const [userRegion, setUserRegion] = useState(region);
  const [memberConnection, setMemberConnection] = useState([]);
  const [deleteConnect, setDeleteConnect] = useState([]);
  const [hideEvents, setHideEvents] = useState();


  console.log('1', profile);
  console.log('2', userRegion);
  
  useEffect(() => {
    setUserRegion(region);
  }, [profile]);

  useFocusEffect(
    useCallback(() => {
      fetchEventRegion({
        region: userRegion,
      });
      return () => {
        cleanEventRegion();
      };
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      const fetchAllPillarPOEAsync = async () => {
        await fetchAllPillarPOE(pillarId);
      };
      fetchAllPillarPOEAsync();

      return () => {
        cleanPillarPOE();
      };
    }, []),
  );



  useFocusEffect(
    useCallback(() => {
      const fetchAllCommunityMemberAsync = async () => {
        await fetchAllCommunityMember({
          s: '',
          sort: 'Desc',
          region: userRegion,
        });
      };
      fetchAllCommunityMemberAsync();

      return () => {
        cleanCommunityMember();
      };
    }, []),
  );

  useEffect(() => {
    setMemberConnection(communityMembers);
  }, [communityMembers]);

  const connectMemberByMemberID = async (memberID, index) => {
    const response = await connectMemberByIdentifier({member_id: memberID});
    if (response?.payload?.code === 200) {
      let items = [...memberConnection];
      let item = {...items[index]};
      item.connection = true;
      items[index] = item;
      setMemberConnection(items);
      ToastMessage.show('You have successfully connected.');
    } else {
      //   toast.closeAll();
      ToastMessage.show(response?.payload?.response);
    }
  };

  const _renderItem = ({item, index}) => {
    let user = item?.user_meta?.region;
    if (typeof user === 'undefined' || user === 'null') {
      user = ' ';
    } else {
      user = item?.user_meta?.region[0];
    }

    return (
      <>
        <View style={[styles.bottomWrapper, styles.shadowProp]} key={index}>
          <TouchableOpacity
            onPress={() => navigation.navigate('OthersAccount', {id: item.ID})}>
            <Image
              source={{uri: item.avatar}}
              style={{
                width: '100%',
                height: 83,
                borderRadius: 10,
              }}
            />
            <View style={{padding: 10, paddingBottom: 20}}>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: Typography.FONT_SF_SEMIBOLD,
                  color: '#030303',
                }}>
                {item?.display_name}
              </Text>
              <Text style={{fontSize: 8, color: '#030303', marginTop: 3}}>
                {item?.registered_date}
                {'\n'}
                {'\n'}
          
              </Text>
            </View>
          </TouchableOpacity>

          <View style={styles.chatIcon}>
            {!memberConnection[index]?.connection && (
              <TouchableOpacity
                onPress={async () => {
                  connectMemberByMemberID(item.ID, index);

                  await analytics().logEvent('dashboard', {
                    item: item?.user_meta?.first_name,
                    description: 'Dashboard Member Connection',
                  });
                }}>
                <Ionicons name="add-circle" size={20} color="#B2B3B9" />
              </TouchableOpacity>
            )}
            {memberConnection[index]?.connection && (
              <Material name="check-circle" size={20} color="#14A2E2" />
            )}
          </View>
        </View>
      </>
    );
  };

  const toast = useToast();
  const id = 'test-toast';

  const _renderMiddleItem = ({item, index}, navigation) => {
    return (
      <TouchableOpacity
        onPress={
          () => {
            //   if (
            //     item?.growth_council_persona_classifcation?.includes(persona) ===
            //     true
            //   ) {
            //     if (item.slug === 'brainstorming-strategy-discussions') {
            //       navigation.navigate('Growth Community');
            //     } else {
            navigation.navigate('CommunityDetail', {
              poeId: item?.term_id,
              pillarId: item?.parent,

              title: 'Growth Community',
              image: require('../../../assets/img/Rectangle2.png'),
            });
          }
          //   } else {
          //     if (!toast.isActive(id)) {
          //       toast.show({
          //         id,
          //         title: 'You have no access to this content',
          //       });
          //     }
          //     // ToastMessage.show('You have no access to this content');
        }
        // }}
      >
        <View style={styles.middleWrapper}>
          <View style={[styles.middleW, styles.shadowProp]}>
            <Image
              source={{uri: item?.image}}
              style={{width: 30, height: 30}}
              resizeMode="contain"
            />
          </View>
          <Text
            style={{
              marginTop: 10,
              fontSize: 8,
              marginHorizontal: 9,
              textAlign: 'center',
              color: '#222B45',
            }}>
            {item?.name}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  const _renderTopItem = ({item, index}) => {
    const actualDate = moment(item.event_start).format('ll').split(',', 3);
    const date = actualDate[0].split(' ', 3);

    let organizer = item?.organizer?.term_name;
    let description = item?.organizer?.description;
    if (organizer === undefined) {
      organizer = ' ';
    } else {
      organizer = <Text>Hosted By {item?.organizer?.term_name}</Text>;
    }

    if (description === undefined) {
      description = ' ';
    } else {
      description = item?.organizer?.description;
    }
    const pillarname = 'Growth Community';
    const image = require('../../../assets/img/Rectangle2.png');
    return (
      <>
        {item?.pillar_categories[0]?.parent === 0 ||
        item?.pillar_categories[0]?.parent === GROWTH_COMMUNITY_ID ? (
          <View style={styles.topWrapper} key={index}>
            <TouchableOpacity
              onPress={async () => {
                navigation.navigate('EventDetail', {
                  id: item.ID,
                  title: pillarname,
                  image: image,
                });

                await analytics().logEvent(item?.title, {
                  id: item.ID,
                  item: item.title,
                });
              }}>
              {setHideEvents(
                item?.pillar_categories[0]?.parent === 0 ||
                  item?.pillar_categories[0]?.parent === GROWTH_COMMUNITY_ID
                  ? true
                  : false,
              )}
              <ImageBackground
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: 20,
                }}
                source={require('../../../assets/img/Rectangle2.png')}>
                <View
                  style={{
                    width: 50,
                    height: 50,
                    marginTop: 10,
                    marginLeft: 200,
                    backgroundColor: '#EBECF0',
                    borderRadius: 10,
                    padding: 5,
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#030303'}}>{date[0]}</Text>
                  <Text style={{color: '#030303'}}>{date[1]}</Text>
                </View>

                <View style={styles.header}>
                  <Text style={styles.headingText1}>{item.title}</Text>
                  <Text style={styles.headingText2}>
                    {organizer} {description}
                  </Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        ) : (
          <></>
        )}
      </>
    );
  };

  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="grey"
        translucent={false}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR}}>
        <View style={styles.container}>
          {regionEvents?.length !== 0 &&
            regionEvents !== null &&
            regionEvents !== undefined && (
              <View style={styles.top}>
                {hideEvents && (
                  <Text style={styles.title}>Growth Community Events</Text>
                )}
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={regionEvents}
                    renderItem={item => _renderTopItem(item, navigation)}
                  />
                </View>
              </View>
            )}

          {pillarPOELoading && (
            <View style={{marginTop: 40}}>
              <Loading />
            </View>
          )}
          {memberConnectionLoading && (
            <View style={{marginTop: 40}}>
              <Loading />
            </View>
          )}
          {pillarPOEs?.length !== 0 && (
            <View style={styles.middle}>
              <Text style={styles.title}>Points of Engagement</Text>

              <FlatList
                contentContainerStyle={{
                  flex: 1,
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                }}
                showsHorizontalScrollIndicator={false}
                data={pillarPOEs}
                // renderItem={_renderMiddleItem}
                renderItem={item => _renderMiddleItem(item, navigation)}
              />
            </View>
          )}
         
          {communityMembers !== undefined &&
            communityMembers?.length !== 0 &&
            communityMembers !== null &&
            communityMembers !== false && (
              <View style={styles.bottom}>
                <Text style={styles.title}>Welcome New Members</Text>
                <View>
                  <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={communityMembers}
                    renderItem={_renderItem}
                  />
                </View>
              </View>
            )}

         

         

          {/* <Footer /> */}
        </View>
      </ScrollView>
      <FloatingButton {...props} navigation={navigation} />
      <BottomNav {...props} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...CommonStyles.container,
    backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
    width: '100%',
    marginBottom: 60,
  },
  top: {
    marginTop: 25,
    justifyContent: 'center',
    marginRight: 2,
  },
  title: {
    fontFamily: Typography.FONT_SF_REGULAR,
    fontSize: 14,
    marginLeft: 20,
    color: Colors.PRIMARY_TEXT_COLOR,
    fontWeight: '700',
  },

  topWrapper: {
    height: 180,
    width: 256,
    marginLeft: 15,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 5,
    marginTop: 15,
  },
  header: {
    marginLeft: 10,
  },
  headingText1: {
    fontFamily: Typography.FONT_SF_MEDIUM,
    marginTop: 10,
    fontWeight: '600',
    width: '98%',
    color: 'white',
    fontSize: 11,
  },
  headingText2: {
    ...CommonStyles.headingText2,
    fontFamily: Typography.FONT_SF_MEDIUM,
    fontWeight: '400',
    color: 'white',
    fontSize: 8,
    lineHeight: 8,
  },
  middle: {
    marginTop: 20,
  },
  middleWrapper: {
    width: Dimensions.get('window').width / 4,
    borderRadius: 20,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleW: {
    backgroundColor: 'white',
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  headingText3: {
    ...CommonStyles.headingText3,
    fontFamily: Typography.FONT_NORMAL,
    padding: 4,
  },
  bottom: {
    marginTop: 15,
    marginRight: 5,
  },
  bottomWrapper: {
    position: 'relative',
    width: Dimensions.get('window').width / 4,
    borderRadius: 10,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 2,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  chatIcon: {
    borderRadius: 50,
    padding: 2,
    justifyContent: 'center',
    position: 'absolute',
    right: 4,
    bottom: 4,
  },
  bottomImage: {
    width: '100%',
    height: 100,
    borderRadius: 20,
  },
  content: {
    marginTop: 20,
    justifyContent: 'center',
    borderRadius: 20,
    marginRight: 10,
  },
  ContentWrapper: {
    height: 210,
    width: contentContainerWidth,
    marginTop: 20,
    marginLeft: 15,
    borderRadius: 20,
    overflow: 'hidden',
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  loading1: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1011,
  },
  attachmentContainer: {
    margin: 1,
    width: contentContainerWidth,
    height: 70,
    paddingLeft: 20,
    paddingRight: 8,
    marginRight: 5,
    marginLeft: 15,
    marginTop: 20,
    paddingBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 15,
    shadowOpacity: 0.1,
    shadowColor: Colors.UNDENARY_BACKGROUND_COLOR,
    elevation: 5,
    backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
  },
  attachmentTitle: {
    marginLeft: 10,
    fontSize: 14,
    width: '80%',
    fontFamily: 'SFProText-Regular',
    color: Colors.SECONDARY_TEXT_COLOR,
  },
  attachmentDownloadButton: {
    width: 35,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
  },
  sectionContainer: {
    marginBottom: 20,
    marginTop: 15,
  },
});

export default HomeCommunity;

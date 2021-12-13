import {StyleSheet} from 'react-native';

import * as Colors from './colors';
import * as Typography from './typography';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        width: '80%',
        paddingBottom: 10,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    button: {
        width: '100%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.PRIMARY_BUTTON_COLOR,
    },
    buttonText: {
        color: Colors.PRIMARY_BUTTON_TEXT_COLOR,
        fontSize: Typography.FONT_SIZE_MEDIUM,
        fontFamily: Typography.FONT_BOLD,
    },
    formSection: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    message: {
        width: '80%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    errorText: {
        fontSize: Typography.FONT_SIZE_MEDIUM,
        color: Colors.PRIMARY_ERROR_COLOR,
        marginLeft: 15,
        marginBottom: 15,
    },
    successText: {
        fontSize: Typography.FONT_SIZE_MEDIUM,
        color: Colors.PRIMARY_SUCCESS_COLOR,
        marginLeft: 15,
        marginBottom: 15,
    },
    forgotButtonWrapper: {
        width: '80%',
    },
    forgotButtonText: {
        height: 30,
        marginBottom: 30,
        color: Colors.TERTIARY_TEXT_COLOR,
    },
    hideShowWrapper: {
        position: 'absolute',
        bottom: 30,
        right: 15,
    },
    hideShow: {
        color: Colors.TERTIARY_TEXT_COLOR,
    },
    buttonWrapper: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkWrapper: {
        flexDirection: 'row',
        fontSize: Typography.FONT_SIZE_MEDIUM,
    },
    headingText1: {
        fontSize: Typography.FONT_SIZE_DOUBLE_EXTRA_LARGE,
        color: Colors.PRIMARY_HEADING_COLOR,
        marginBottom: 2,
    },
    headingText2: {
        fontSize: Typography.FONT_SIZE_MEDIUM,
        color: Colors.SECONDARY_HEADING_COLOR,
        lineHeight: 22,
    },
    headingTitle: {
        fontFamily: Typography.FONT_SEMI_BOLD,
        fontSize: Typography.FONT_SIZE_MEDIUM,
        marginVertical: 10,
        color: Colors.PRIMARY_TEXT_COLOR,
    },
    headingSubTitle: {
        fontFamily: Typography.FONT_MEDIUM,
        fontSize: Typography.FONT_SIZE_SMALL,
        color: Colors.SECONDARY_TEXT_COLOR,
    },
    body: {
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        paddingTop: 11,
        paddingBottom: 11,
    },
    listItem: {
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    listItemInner: {
        flexDirection: 'row', 
        alignItems: 'center',
    },
    roundedWrapper: {
        height:35, 
        width: 35,
        borderRadius: 8,
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    listName: {
        fontSize: Typography.FONT_SIZE_MEDIUM,
        fontFamily: Typography.FONT_SEMI_BOLD,
        lineHeight: 21,
        color: Colors.QUATERNARY_TEXT_COLOR,
        marginLeft: 15,
    },
    circleListItem: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    circleFixed: {
        alignItems: 'center',
        justifyContent: 'center',
        height:55, 
        width: 55,
        borderRadius: 27.5,
        borderWidth: 0,
        marginBottom: 5,
    },
    modalBackground: {
        flex: 1,
    },
    form: {
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 32,
        marginRight: 32,
    },
    searchWrapper: {
        borderBottomColor: Colors.NONARY_BORDER_COLOR,
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        shadowColor: '#A9A9A933',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 3,
    },
    searchInput: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: Colors.SENARY_BORDER_COLOR,
        flex: 1,
    },
    headingText: {
        fontSize: Typography.FONT_SIZE_MEDIUM, 
        fontFamily: Typography.FONT_NORMAL, 
        color: Colors.TERTIARY_TEXT_COLOR, 
        lineHeight: 21,
    },
    options: {
        flexDirection: 'row',
        paddingTop: 14,
        marginRight: 20,
    },
    optionsWrapper: {
        width: '50%',
        borderRadius: 6,
        height: 120,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        backgroundColor: Colors.TERTIARY_BACKGROUND_COLOR,
        borderColor: Colors.SENARY_BORDER_COLOR,
        borderWidth: 1,
        paddingTop: 25,
    },
    optionsCircle: {
        backgroundColor:'rgba(210,212,252,0.50)', 
        height:46, 
        width: 46,
        borderRadius: 23,
        borderColor: 'rgba(210,212,252,0.50)', 
        borderWidth: 1,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    optionsText: {
        color: Colors.QUATERNARY_TEXT_COLOR,
        fontSize: Typography.FONT_SIZE_SMALL,
        fontFamily: Typography.FONT_SEMI_BOLD,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 25,
    },
    amountWrapper: {
        backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        borderColor: Colors.QUINARY_BORDER_COLOR,
        borderWidth: 1,
        padding: 42,
        paddingTop: 20,
        height: '100%',
        width: '100%',
        marginTop: Platform.OS === 'ios' ? 100 : 60,
    },
    amountList: {
        flexDirection: 'row',
        marginBottom: 10,
        marginLeft: 15,
        marginRight: 15,
    },
    amountListItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    amountListItemRight: {
        marginRight: 9,
    },
    amountListItemFocus: {
        borderColor: Colors.TERTIARY_BORDER_COLOR,
        borderWidth: 2,
        borderRadius: 6,
    },
    amountListItemNotFocus: {
        borderColor: 'rgba(210,212,252,0.50)',
        borderWidth: 2,
        borderRadius: 6,
    },
    amountBottom: {
        height: 39,
        width: 65,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(210,212,252,0.50)',
        padding: 5,
    },
    amountText: {
        color: Colors.PRIMARY_TEXT_COLOR,
        fontSize: Typography.FONT_SIZE_MEDIUM,
        fontFamily: Typography.FONT_BOLD,
    },
    inputWrapper: {
        backgroundColor: 'rgba(255,255,255,0.90)',
        borderRadius: 25,
        borderColor: 'rgba(20,21,30,0.40)',
        borderWidth: 1,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        height: 56,
    },
    textWrapper: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 15,
        marginRight: 15,
        alignItems: 'center',
    },
    borderBottom: {
        borderBottomColor: 'rgba(20,21,30,0.40)',
        borderBottomWidth: 0.5,
    },
    text: {
        fontSize: Typography.FONT_SIZE_TINY_PLUS,
        fontFamily: Typography.FONT_SEMI_BOLD,
        color: 'rgba(20,21,30,0.40)',
        lineHeight: 18,
    },
    text1: {
        fontSize: Typography.FONT_SIZE_EXTRA_LARGE,
        fontFamily: Typography.FONT_MEDIUM,
        color: Colors.TERTIARY_TEXT_COLOR,
        lineHeight: 27,
    },
    text2: {
        fontSize: Typography.FONT_SIZE_LARGE,
        fontFamily: Typography.FONT_NORMAL,
        color: Colors.TERTIARY_TEXT_COLOR,
        lineHeight: 27,
    },
    text3: {
        fontSize: Typography.FONT_SIZE_MEDIUM,
        fontFamily: Typography.FONT_NORMAL,
        color: Colors.TERTIARY_TEXT_COLOR,
        lineHeight: 27,
    },
    text4: {
        fontSize: Typography.FONT_SIZE_DOUBLE_EXTRA_LARGE_PLUS,
        fontFamily: Typography.FONT_BOLD,
        color: Colors.TERTIARY_TEXT_COLOR,
        padding: 10,
    },
    text5: {
        fontSize: Typography.FONT_SIZE_MEDIUM,
        fontFamily: Typography.FONT_BOLD,
        color: Colors.TERTIARY_TEXT_COLOR,
        lineHeight: 27,
        marginTop: 15,
        marginLeft: 15,
    },
    emptyList: {
        flex: 1,
        justifyContent: 'center',
    },
    emptyMessage: {
        textAlign: 'center',
    },
    middleContent: {
        backgroundColor: 'rgba(18,18,18,0.7)',
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    middleContentHeading: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    nearbyListWrapper: {
        backgroundColor: Colors.PRIMARY_BACKGROUND_COLOR,
    },
    nearbyList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 14,
        width: '100%',
    },
    nearbyItem: {
        width: '50%',
        marginRight: 5,
    },
    nearbyInner: {
        borderRadius: 7,
        height: 111,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
        backgroundColor: Colors.OCTONARY_BACKGROUND_COLOR,
        borderColor: Colors.SENARY_BORDER_COLOR,
        borderWidth: 1,
    },
    nearbyImage: {
        borderRadius: 7,
        height: 111,
        width: 175,
        backgroundColor: Colors.OCTONARY_BACKGROUND_COLOR,
    },
    heart: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 35,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
    },
    nearbyInfo: {
        marginLeft: -40,
    },
    nearbyText: {
        textTransform: 'capitalize',
        color: Colors.SECONDARY_TEXT_COLOR,
        fontSize: Typography.FONT_SIZE_MEDIUM,
        fontFamily: Typography.FONT_SEMI_BOLD,
        textAlign: 'left',
        paddingBottom: 5,
        width: 175,
    },
    reviews: {
        flexDirection: 'row',
    },
    reviewsText: {
        paddingLeft: 7,
        color: Colors.UNDENARY_TEXT_COLOR,
        fontSize: Typography.FONT_SIZE_SMALL,
        fontFamily: Typography.FONT_NORMAL,
    },
    locationWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 175,
    },
    location: {
        flexDirection: 'row',
        paddingTop: 5,
        paddingBottom: 5,
    },
    distanceText: {
        color: Colors.UNDENARY_TEXT_COLOR,
        fontSize: Typography.FONT_SIZE_SMALL,
        fontFamily: Typography.FONT_BOLD,
    },
    viewsText: {
        paddingTop: 10,
        paddingRight: 10,
        color: Colors.UNDENARY_TEXT_COLOR,
        fontSize: Typography.FONT_SIZE_SMALL,
        fontFamily: Typography.FONT_BOLD,
    },
    statusText: {
        paddingBottom: 10,
        color: Colors.UNDENARY_TEXT_COLOR,
        fontSize: Typography.FONT_SIZE_SMALL,
        fontFamily: Typography.FONT_BOLD,
    },
    topWrapper: {
        padding: 32,
        paddingTop: Platform.OS === 'ios' ? 15 : 10,
        paddingBottom: Platform.OS === 'ios' ? 15 : 10,
        backgroundColor: Colors.OCTONARY_BACKGROUND_COLOR,
        width: '100%',
    },
    topHeading: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    topText1: {
        textTransform: 'uppercase',
        fontSize: Typography.FONT_SIZE_MEDIUM,
        fontFamily: Typography.FONT_SEMI_BOLD,
        color: Colors.SECONDARY_TEXT_COLOR,
        lineHeight: 18,
    },
    topText2: {
        textTransform: 'uppercase',
        fontSize: Typography.FONT_SIZE_SMALL,
        fontFamily: Typography.FONT_SEMI_BOLD,
        color: Colors.TERTIARY_TEXT_COLOR,
        lineHeight: 18,
    },
    categoryWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    categoryInner: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.OCTONARY_BACKGROUND_COLOR,
        borderColor: Colors.SENARY_BORDER_COLOR,
        borderWidth: 1,
    },
    categoryText: {
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    merchantText: {
        color: Colors.SECONDARY_TEXT_COLOR,
        fontFamily: Typography.FONT_SEMI_BOLD,
        textAlign: 'left',
        paddingBottom: 5,
        width: 175,
    },
    merchantText1: {
        textTransform: 'uppercase',
        color: Colors.PRIMARY_TEXT_COLOR,
        fontSize: Typography.FONT_SIZE_DOUBLE_EXTRA_LARGE,
        fontFamily: Typography.FONT_SEMI_BOLD,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        paddingLeft: 5,
        paddingRight: 5,
    },
});

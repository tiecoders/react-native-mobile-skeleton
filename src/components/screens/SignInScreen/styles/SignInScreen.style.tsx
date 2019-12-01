import {scale} from 'react-native-size-matters';
import {textStyle} from "../../../common";

const defaultStyles = {
    container: {
        flex: 1,
        paddingVertical: scale(24),
        paddingHorizontal: scale(16),
    },
    signInButton: {
        marginTop: scale(8)
    },
    signInContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: scale(24),
    },
    socialAuthContainer: {
        marginTop: scale(48),
    },
    ewaButton: {
        maxWidth: scale(72),
        paddingHorizontal: 0,
    },
    ewaButtonText: {
        color: 'white',
        ...textStyle.button,
    },
    ewaButtonIcon: {
        marginHorizontal: 0,
        tintColor: 'white',
    },
    formContainer: {
        flex: 1,
        marginTop: scale(48),
    },
    signInLabel: {
        flex: 1,
        ...textStyle.headline,
        color: 'white',
    },
    signUpButton: {
        flexDirection: 'row-reverse',
        paddingHorizontal: 0,
    },
    signUpButtonText: {
        color: 'white',
    },
    signUpButtonIcon: {
        marginHorizontal: 0,
        tintColor: 'white',
    },
    socialAuthIcon: {
        tintColor: 'white',
    },
    socialAuthHint: {
        color: 'white',
    },
}

export default defaultStyles

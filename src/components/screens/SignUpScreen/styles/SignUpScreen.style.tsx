import {textStyle} from "../../../common";

const defaultStyles = theme => {
    return {
        container: {
            flex: 1,
            backgroundColor: theme['background-basic-color-1'],
        },
        headerContainer: {
            minHeight: 200,
            paddingHorizontal: 16,
            paddingTop: 24,
            paddingBottom: 44,
        },
        signUpContainer: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 32,
        },
        socialAuthContainer: {
            marginTop: 24,
        },
        formContainer: {
            marginTop: 48,
            paddingHorizontal: 16,
        },
        ewaButton: {
            maxWidth: 72,
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
        signInLabel: {
            flex: 1,
            color: 'white',
            ...textStyle.headline,
        },
        signInButton: {
            flexDirection: 'row-reverse',
            paddingHorizontal: 0,
        },
        signInButtonText: {
            color: 'white',
            ...textStyle.button,
        },
        signInButtonIcon: {
            marginHorizontal: 0,
            tintColor: 'white',
        },
        signUpButton: {
            marginVertical: 24,
            marginHorizontal: 16,
        },
        socialAuthHint: {
            ...textStyle.paragraph,
        },
        socialAuthIcon: {
            tintColor: theme['text-basic-color'],
        },
        orContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: 16,
            marginTop: 52,
        },
        orLabel: {
            marginHorizontal: 8,
            ...textStyle.headline,
        },
        emailSignLabel: {
            alignSelf: 'center',
            marginTop: 8,
            ...textStyle.paragraph,
        },
        divider: {
            flex: 1,
            height: 1,
            backgroundColor: theme['background-basic-color-3'],
        }
    }
}

export default defaultStyles

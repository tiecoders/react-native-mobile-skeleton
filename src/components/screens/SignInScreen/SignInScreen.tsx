import React from 'react'
import {State, Text, ThemedComponentProps, ThemeType, withStyles} from "react-native-ui-kitten"
import styles from './styles'
import {
    ImageBackground,
    ImageProps,
    View,
} from 'react-native';
import {ScrollableAvoidKeyboard, textStyle} from "../../common";
import {imageSignIn1Bg, ImageSource} from "../../../assets/images";

interface ComponentProps {
}

export type SignInScreenProps = ThemedComponentProps & ComponentProps;

class SignInComponent extends React.Component<SignInScreenProps, State> {

    private backgroundImage: ImageSource = imageSignIn1Bg;

    public render(): React.ReactNode {
        // @ts-ignore
        const { themedStyle } = this.props;

        return (
            <ScrollableAvoidKeyboard>
                <ImageBackground
                    style={themedStyle.container}
                    source={this.backgroundImage.imageSource}>

                </ImageBackground>
            </ScrollableAvoidKeyboard>
        )
    }
}

export const SignInScreen = withStyles(SignInComponent, (theme: ThemeType) => ({
    container: {
        flex: 1,
        paddingVertical: 24,
        paddingHorizontal: 16,
    },
    signInContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 24,
    },
    socialAuthContainer: {
        marginTop: 48,
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
    formContainer: {
        flex: 1,
        marginTop: 48,
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
}));

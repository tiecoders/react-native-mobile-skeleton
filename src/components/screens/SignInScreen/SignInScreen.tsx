import React from 'react'
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {Button, State, StyleType, Text, ThemedComponentProps, ThemeType, withStyles} from "react-native-ui-kitten";
import styles from './styles'
import {
    ImageBackground,
    ImageProps,
    View,
} from 'react-native';
import {ScrollableAvoidKeyboard, textStyle} from "../../common";
import {imageSignIn1Bg, ImageSource} from "../../../assets/images";
import {SignInForm} from "./signInForm";
import {ArrowForwardIconOutline, HeartIconFill} from "../../../assets/icons";
import {SocialAuth} from "../../../core/auth/socialAuth";

interface ComponentProps {
}

export type SignInScreenProps = ThemedComponentProps & ComponentProps;

class SignInComponent extends React.Component<SignInScreenProps, State> {

    private backgroundImage: ImageSource = imageSignIn1Bg;

    private renderEwaButtonIcon = (style: StyleType): React.ReactElement<ImageProps> => {
        const { themedStyle } = this.props;

        return HeartIconFill({ ...style, ...themedStyle.ewaButtonIcon });
    };

    private onEwaButtonPress = () => {
        // do Something Here
    };

    private renderSignUpButtonIcon = (style: StyleType): React.ReactElement<ImageProps> => {
        const { themedStyle } = this.props;

        return ArrowForwardIconOutline({ ...style, ...themedStyle.signUpButtonIcon });
    };

    private onSignUpButtonPress = () => {
        // SEND SIGN IN REQUEST
    };

    public render(): React.ReactNode {
        // @ts-ignore
        const { themedStyle } = this.props;

        return (
            <ScrollableAvoidKeyboard>
                <ImageBackground
                    style={themedStyle.container}
                    source={this.backgroundImage.imageSource}>
                    <Button
                        appearance='ghost'
                        style={themedStyle.ewaButton}
                        textStyle={themedStyle.ewaButtonText}
                        size='large'
                        activeOpacity={0.75}
                        icon={this.renderEwaButtonIcon}
                        onPress={this.onEwaButtonPress}>
                        EWA
                    </Button>
                    <View style={themedStyle.signInContainer}>
                        <Text
                            style={themedStyle.signInLabel}
                            category='h4'>
                            SIGN IN
                        </Text>
                        <Button
                            style={themedStyle.signUpButton}
                            textStyle={themedStyle.signUpButtonText}
                            activeOpacity={0.75}
                            appearance='ghost'
                            size='giant'
                            icon={this.renderSignUpButtonIcon}
                            onPress={this.onSignUpButtonPress}>
                            Sign Up
                        </Button>
                    </View>
                    <SignInForm />
                    <Button
                        size='large'
                        textStyle={textStyle.button}
                        style={themedStyle.signInButton}
                        onPress={this.onSignInButtonPress}>
                        SIGN IN
                    </Button>
                    <SocialAuth
                        style={themedStyle.socialAuthContainer}
                        iconStyle={themedStyle.socialAuthIcon}
                        hintStyle={themedStyle.socialAuthHint}
                        hint='Sign with a social account'
                        onGooglePress={this.onGoogleButtonPress}
                        onFacebookPress={this.onFacebookButtonPress}
                        onTwitterPress={this.onTwitterButtonPress}
                    />
                </ImageBackground>
            </ScrollableAvoidKeyboard>
        )
    }
}

export const SignInScreen = withStyles(SignInComponent, (theme: ThemeType) => ({
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
}));

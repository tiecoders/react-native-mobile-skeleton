import React from 'react'
import styles from './styles'
import {
    ImageBackground,
    ImageProps,
    View
} from 'react-native';
import {Button, State, StyleType, Text, ThemedComponentProps, ThemeType, withStyles} from "react-native-ui-kitten";
import translate from "../../../services/translation";
import {ScrollableAvoidKeyboard, textStyle} from "../../common";
import {imageSignIn1Bg, ImageSource} from "../../../assets/images";
import {SignInForm} from "./signInForm";
import {ArrowForwardIconOutline, HeartIconFill} from "../../../assets/icons";
import {SocialAuth} from "../../../core/auth/socialAuth";
import {compose} from "redux";
import {connect} from "react-redux";
import {NavigationStackProp} from "react-navigation-stack";
import firebaseService from "../../../services/firebaseService";

export type SignInScreenProps = ThemedComponentProps & NavigationStackProp;

class SignInComponent extends React.Component<SignInScreenProps, State> {

    componentDidMount = () => {
        firebaseService.onStateChangedEvent(this['props'].navigation, false);
    }

    private backgroundImage: ImageSource = imageSignIn1Bg;

    private renderEwaButtonIcon = (style: StyleType): React.ReactElement<ImageProps> => {
        // @ts-ignore
        const {themedStyle} = this.props;

        return HeartIconFill({...style, ...themedStyle.ewaButtonIcon});
    };

    private renderSignUpButtonIcon = (style: StyleType): React.ReactElement<ImageProps> => {
        // @ts-ignore
        const {themedStyle} = this.props;

        return ArrowForwardIconOutline({...style, ...themedStyle.signUpButtonIcon});
    };

    private onLogoButtonPress = () => {
        alert('onLogoButtonPress')
    };

    private onSignInButtonPress = () => {
        alert('onSignInButtonPress')
    };

    private onSignUpButtonPress = () => {
        this['props'].navigation.navigate('signUp');
    };

    public render(): React.ReactNode {
        // @ts-ignore
        const {themedStyle} = this.props;

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
                        onPress={this.onLogoButtonPress}>
                        {translate('APP_NAME')}
                    </Button>
                    <View style={themedStyle.signInContainer}>
                        <Text
                            style={themedStyle.signInLabel}
                            category='h4'>
                            {translate('SIGN_IN')}
                        </Text>
                        <Button
                            style={themedStyle.signUpButton}
                            textStyle={themedStyle.signUpButtonText}
                            activeOpacity={0.75}
                            appearance='ghost'
                            size='giant'
                            icon={this.renderSignUpButtonIcon}
                            onPress={this.onSignUpButtonPress}>
                            {translate('SIGN_UP')}
                        </Button>
                    </View>
                    <SignInForm/>
                    <Button
                        size='large'
                        textStyle={textStyle.button}
                        style={themedStyle.signInButton}
                        onPress={this.onSignInButtonPress}>
                        {translate('SIGN_IN')}
                    </Button>
                    <SocialAuth
                        style={themedStyle.socialAuthContainer}
                        iconStyle={themedStyle.socialAuthIcon}
                        hintStyle={themedStyle.socialAuthHint}
                        hint={translate('SIGN_IN_WITH_SOCIAL_ACCOUNT')}
                    />
                </ImageBackground>
            </ScrollableAvoidKeyboard>
        )
    }
}

const SignInScreen = withStyles(SignInComponent, (theme: ThemeType) => styles);

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = dispatch => ({});

const enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
);

export default enhance(SignInScreen)

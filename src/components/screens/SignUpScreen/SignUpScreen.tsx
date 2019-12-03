import React from 'react'
import {
    ImageProps,
    View,
} from 'react-native';
import {Button, State, StyleType, Text, ThemedComponentProps, ThemeType, withStyles} from "react-native-ui-kitten"
import styles from './styles'
import {NavigationStackProp} from "react-navigation-stack";
import {ScrollableAvoidKeyboard, textStyle} from "../../common";
import {ImageOverlay} from "../../common";
import {SocialAuth} from "../../../core/auth/socialAuth";
import {SignUpForm} from "./signUpForm";
import {connect} from "react-redux";
import {imageSignUp1Bg, ImageSource} from "../../../assets/images";
import {ArrowForwardIconOutline, HeartIconFill} from "../../../assets/icons";
import {SignUpFormData} from "./type";
import {compose} from "redux";
import firebaseService from "../../../services/firebaseService";

export type SignUpScreenProps = ThemedComponentProps & NavigationStackProp;

class SignUpScreenComponent extends React.Component<SignUpScreenProps, State> {

    componentDidMount = () => {
        firebaseService.onStateChangedEvent(this['props'].navigation, false);
    }

    private backgroundImage: ImageSource = imageSignUp1Bg;

    private renderEwaButtonIcon = (style: StyleType): React.ReactElement<ImageProps> => {
        // @ts-ignore
        const { themedStyle } = this.props;

        return HeartIconFill({ ...style, ...themedStyle.ewaButtonIcon });
    };

    private onEwaButtonPress = () => {
        // @ts-ignore
        this.props.onEwaPress();
    };

    private renderSignInButtonIcon = (style: StyleType): React.ReactElement<ImageProps> => {
        // @ts-ignore
        const { themedStyle } = this.props;

        return ArrowForwardIconOutline({ ...style, ...themedStyle.signInButtonIcon });
    };

    private onSignInButtonPress = () => {
        this['props'].navigation.navigate({routeName: 'signIn'});
    };

    private onFormDataChange = (formData: SignUpFormData) => {
        // @ts-ignore
        this.setState({ formData });
    };

    private onSignUpButtonPress = () => {
        // @ts-ignore
        this.props.onSignUpPress(this.state.formData);
    };

    render = () => {
        // @ts-ignore
        const {themedStyle} = this.props;

        return (
            <ScrollableAvoidKeyboard style={themedStyle.container}>
                <ImageOverlay
                    style={themedStyle.headerContainer}
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
                    <View style={themedStyle.signUpContainer}>
                        <Text
                            style={themedStyle.signInLabel}
                            category='h4'>
                            SIGN UP
                        </Text>
                        <Button
                            style={themedStyle.signInButton}
                            textStyle={themedStyle.signInButtonText}
                            appearance='ghost'
                            size='giant'
                            activeOpacity={0.75}
                            icon={this.renderSignInButtonIcon}
                            onPress={this.onSignInButtonPress}>
                            Sign In
                        </Button>
                    </View>
                </ImageOverlay>
                <SocialAuth
                    style={themedStyle.socialAuthContainer}
                    hintStyle={themedStyle.socialAuthHint}
                    iconStyle={themedStyle.socialAuthIcon}
                    hint='Sign with a social account'
                />
                <View style={themedStyle.orContainer}>
                    <View style={themedStyle.divider}/>
                    <Text
                        style={themedStyle.orLabel}
                        category='h5'>
                        OR
                    </Text>
                    <View style={themedStyle.divider}/>
                </View>
                <Text
                    style={themedStyle.emailSignLabel}>
                    Sign up with Email
                </Text>
                <SignUpForm
                    style={themedStyle.formContainer}
                    onDataChange={this.onFormDataChange}
                />
                <Button
                    style={themedStyle.signUpButton}
                    textStyle={textStyle.button}
                    size='large'
                    // @ts-ignore
                    disabled={true}
                    onPress={this.onSignUpButtonPress}>
                    SIGN UP
                </Button>
            </ScrollableAvoidKeyboard>)
    }
}

const SignUpScreen = withStyles(SignUpScreenComponent, (theme: ThemeType) => (styles(theme)));

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({});

const enhance = compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
);

export default enhance(SignUpScreen)

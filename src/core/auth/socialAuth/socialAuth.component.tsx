import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {
    ImageStyle,
    StyleProp,
    TextProps,
    TextStyle,
    View,
    ViewProps,
} from 'react-native';
import {
    ThemedComponentProps,
    ThemeType,
    withStyles,
} from 'react-native-ui-kitten';
import {Text} from 'react-native-ui-kitten';
import {textStyle} from '../../../components/common';
import {
    FacebookIconFill
} from '../../../assets/icons';
import {SocialButton} from './socialAuthButton.component';
import facebookService from "../../../services/facebookService";
import firebaseService from "../../../services/firebaseService";

interface ComponentProps {
    hint?: string;
    hintStyle?: StyleProp<TextStyle>;
    iconStyle?: StyleProp<ImageStyle>;
    onFacebookPress: () => void;
}

export type SocialAuthProps = ThemedComponentProps & ViewProps & ComponentProps;

class SocialAuthComponent extends React.Component<SocialAuthProps> {

    private onFacebookButtonPress = async () => {
        // @ts-ignore
        const {type, token} = await facebookService.logInWithReadPermissionsAsync();

        if (type === 'success') {
            firebaseService.signInWithCredential(token);
        } else {
            console.log('login failed:' + type);
        }
    };

    private renderCaptionElement = (style: StyleProp<TextStyle>): React.ReactElement<TextProps> => {
        const {hint} = this['props'];

        return (
            <Text
                style={style}>
                {hint}
            </Text>
        );
    };

    public render(): React.ReactNode {
        const {themedStyle, hintStyle, iconStyle, hint, ...restProps} = this['props'];
        const {buttonContainer, ...componentStyle} = themedStyle;

        return (
            <View {...restProps}>
                {hint ? this.renderCaptionElement([componentStyle.hint, hintStyle]) : null}
                <View style={buttonContainer}>
                    <SocialButton
                        activeOpacity={0.75}
                        icon={FacebookIconFill}
                        iconStyle={iconStyle}
                        onPress={this.onFacebookButtonPress}
                    />
                </View>
            </View>
        );
    }
}

export const SocialAuth = withStyles(SocialAuthComponent, (theme: ThemeType) => ({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    hint: {
        alignSelf: 'center',
        marginBottom: scale(16),
        ...textStyle.subtitle,
    },
}));


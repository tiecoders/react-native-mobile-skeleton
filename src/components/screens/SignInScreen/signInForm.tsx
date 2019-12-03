import React from 'react';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {
    View,
    ViewProps,
} from 'react-native';
import {
    ThemedComponentProps,
    ThemeType,
    withStyles,
} from 'react-native-ui-kitten';
import {
    textStyle,
    ValidationInput,
} from '../../common';
import {
    EmailValidator,
    PasswordValidator,
} from '../../../core/validators';
import { SignInFormData } from './type';
import translate from "../../../services/translation";

interface ComponentProps {
    /**
     * Will emit changes depending on validation:
     * Will be called with form value if it is valid, otherwise will be called with undefined
     */
    onDataChange: (data: SignInFormData | undefined) => void;
}

export type SignInFormProps = ThemedComponentProps & ViewProps & ComponentProps;

interface State {
    email: string | undefined;
    password: string | undefined;
}

class SignInFormComponent extends React.Component<SignInFormProps, State> {

    public state: State = {
        email: undefined,
        password: undefined,
    };

    public componentDidUpdate(prevProps: SignInFormProps, prevState: State) {
        const oldFormValid: boolean = this.isValid(prevState);
        const newFormValid: boolean = this.isValid(this.state);

        const isStateChanged: boolean = this.state !== prevState;
        const becomeValid: boolean = !oldFormValid && newFormValid;
        const becomeInvalid: boolean = oldFormValid && !newFormValid;
        const remainValid: boolean = oldFormValid && newFormValid;

        if (becomeValid) {
            // @ts-ignore
            this.props.onDataChange(this.state);
        } else if (becomeInvalid) {
            // @ts-ignore
            this.props.onDataChange(undefined);
        } else if (isStateChanged && remainValid) {
            // @ts-ignore
            this.props.onDataChange(this.state);
        }
    }

    private onEmailInputTextChange = (email: string) => {
        // @ts-ignore
        this.setState({ email });
    };

    private onPasswordInputTextChange = (password: string) => {
        // @ts-ignore
        this.setState({ password });
    };

    private isValid = (value: SignInFormData): boolean => {
        const { email, password } = value;

        return email !== undefined
            && password !== undefined;
    };

    public render(): React.ReactNode {
        // @ts-ignore
        const { style, themedStyle, theme, ...restProps } = this.props;

        return (
            <View
                {...restProps}
                style={[themedStyle.container, style]}>
                <ValidationInput
                    style={themedStyle.emailInput}
                    textStyle={textStyle.paragraph}
                    labelStyle={textStyle.label}
                    label={translate('EMAIL')}
                    placeholder={translate('EMAIL')}
                    validator={EmailValidator}
                    onChangeText={this.onEmailInputTextChange}
                />
                <ValidationInput
                    style={themedStyle.passwordInput}
                    textStyle={textStyle.paragraph}
                    labelStyle={textStyle.label}
                    secureTextEntry={true}
                    placeholder={translate('PASSWORD')}
                    label={translate('PASSWORD')}
                    validator={PasswordValidator}
                    onChangeText={this.onPasswordInputTextChange}
                />
            </View>
        );
    }
}

export const SignInForm = withStyles(SignInFormComponent, (theme: ThemeType) => ({
    container: {},
    emailInput: {
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
    },
    passwordInput: {
        marginTop: verticalScale(16),
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
    },
}));

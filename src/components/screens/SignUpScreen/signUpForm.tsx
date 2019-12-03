import React from 'react';
import {
    View,
    ViewProps,
} from 'react-native';
import {
    ThemedComponentProps,
    ThemeType,
    withStyles,
    CheckBox
} from 'react-native-ui-kitten';
import {
    textStyle,
    ValidationInput,
} from '../../common';
import {
    DOBValidator,
    EmailValidator,
    NameValidator,
    PasswordValidator,
} from '../../../core/validators';
import { SignUpFormData } from './type';

interface ComponentProps {
    /**
     * Will emit changes depending on validation:
     * Will be called with form value if it is valid, otherwise will be called with undefined
     */
    onDataChange: (value: SignUpFormData | undefined) => void;
}

export type SignUpFormProps = ThemedComponentProps & ViewProps & ComponentProps;

interface State {
    firstName: string | undefined;
    lastName: string | undefined;
    date: string | undefined;
    email: string | undefined;
    password: string | undefined;
    termsAccepted: boolean;
}

class SignUpFormComponent extends React.Component<SignUpFormProps, State> {

    public state: State = {
        firstName: undefined,
        lastName: undefined,
        date: undefined,
        email: undefined,
        password: undefined,
        termsAccepted: false,
    };

    public componentDidUpdate(prevProps: SignUpFormProps, prevState: State) {
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

    private onFirstNameInputTextChange = (firstName: string) => {
        // @ts-ignore
        this.setState({ firstName });
    };

    private onLastNameValidationResult = (lastName: string) => {
        // @ts-ignore
        this.setState({ lastName });
    };

    private onDateInputTextChange = (date: string) => {
        // @ts-ignore
        this.setState({ date });
    };

    private onEmailInputTextChange = (email: string) => {
        // @ts-ignore
        this.setState({ email });
    };

    private onPasswordInputTextChange = (password: string) => {
        // @ts-ignore
        this.setState({ password });
    };

    private onTermsAcceptChange = (termsAccepted: boolean) => {
        // @ts-ignore
        this.setState({ termsAccepted });
    };

    private isValid = (value: SignUpFormData): boolean => {
        // @ts-ignore
        const { firstName, lastName, date, email, password, termsAccepted } = value;

        return firstName !== undefined
            && lastName !== undefined
            && date !== undefined
            && email !== undefined
            && password !== undefined
            && termsAccepted;
    };

    private passwordCaption = (): string => {
        return this.state.password ? 'Password entered correctly' : 'Password entered incorrectly';
    };

    public render(): React.ReactNode {
        // @ts-ignore
        const { style, themedStyle, ...restProps } = this.props;

        return (
            <View
                style={[themedStyle.container, style]}
                {...restProps}>
                <ValidationInput
                    style={[themedStyle.input, themedStyle.firstNameInput]}
                    textStyle={themedStyle.inputText}
                    placeholder='Ally'
                    label='FIRST NAME'
                    autoCapitalize='words'
                    validator={NameValidator}
                    onChangeText={this.onFirstNameInputTextChange}
                />
                <ValidationInput
                    style={themedStyle.input}
                    textStyle={textStyle.paragraph}
                    labelStyle={textStyle.label}
                    placeholder='Watsan'
                    label='LAST NAME'
                    autoCapitalize='words'
                    validator={NameValidator}
                    onChangeText={this.onLastNameValidationResult}
                />
                <ValidationInput
                    style={themedStyle.input}
                    textStyle={textStyle.paragraph}
                    labelStyle={textStyle.label}
                    placeholder='18/10/1995'
                    label='DATE OF BIRTHDAY'
                    validator={DOBValidator}
                    onChangeText={this.onDateInputTextChange}
                />
                <ValidationInput
                    style={themedStyle.input}
                    textStyle={themedStyle.inputText}
                    labelStyle={themedStyle.inputLabel}
                    placeholder='ally.watsan@gmail.com'
                    label='EMAIL'
                    validator={EmailValidator}
                    onChangeText={this.onEmailInputTextChange}
                />
                <ValidationInput
                    style={themedStyle.input}
                    textStyle={textStyle.paragraph}
                    labelStyle={textStyle.label}
                    captionTextStyle={textStyle.paragraph}
                    label='PASSWORD'
                    placeholder='Password'
                    caption={this.passwordCaption()}
                    secureTextEntry={true}
                    validator={PasswordValidator}
                    onChangeText={this.onPasswordInputTextChange}
                />
                <CheckBox
                    style={themedStyle.termsCheckBox}
                    textStyle={themedStyle.termsCheckBoxText}
                    checked={this.state.termsAccepted}
                    text={'By creating an account, I agree to the Ewa Terms of\nUse and Privacy Policy'}
                    onChange={this.onTermsAcceptChange}
                />
            </View>
        );
    }
}

export const SignUpForm = withStyles(SignUpFormComponent, (theme: ThemeType) => ({
    container: {},
    input: {
        marginTop: 16,
    },
    firstNameInput: {
        marginTop: 0,
    },
    termsCheckBox: {
        marginTop: 20,
    },
    termsCheckBoxText: {
        fontSize: 11,
        color: theme['text-hint-color'],
        ...textStyle.paragraph,
    },
}));

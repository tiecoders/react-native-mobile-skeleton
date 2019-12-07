import React from 'react';
import {
    View,
    ViewProps,
} from 'react-native';
import {
    ThemedComponentProps,
    ThemeType,
    withStyles,
    CheckBox,
    Radio
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
import translate from "../../../services/translation";

interface ComponentProps {
    /**
     * Will emit changes depending on validation:
     * Will be called with form value if it is valid, otherwise will be called with undefined
     */
    onDataChange: (value: SignUpFormData | undefined) => void;
}

export type SignUpFormProps = ThemedComponentProps & ViewProps & ComponentProps;

interface State {
    fname: string | undefined;
    lname: string | undefined;
    date: string | undefined;
    email: string | undefined;
    password: string | undefined;
    gender: undefined;
    termsAccepted: boolean;
}

class SignUpFormComponent extends React.Component<SignUpFormProps, State> {

    public state: State = {
        fname: undefined,
        lname: undefined,
        date: undefined,
        email: undefined,
        password: undefined,
        gender: undefined,
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

    private onFirstNameInputTextChange = (fname: string) => {
        // @ts-ignore
        this.setState({
            fname: 'ahmed',
            lname: 'hannachi',
            birthday: '25/02/1992',
            email: 'a.hannachi@tiecoders.com',
            password: '25021992++',
            gender: 'male',
            termsAccepted: true
        });
    };

    private onLastNameValidationResult = (lname: string) => {
        // @ts-ignore
        this.setState({ lname });
    };

    private onDateInputTextChange = (birthday: string) => {
        // @ts-ignore
        this.setState({ birthday });
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

    private onGenderMaleChange = (gender: boolean) => {
        // @ts-ignore
        this.setState({ gender: 'male' });
    };

    private onGenderFemaleChange = (gender: boolean) => {
        // @ts-ignore
        this.setState({ gender: 'female' });
    };

    private isValid = (value: SignUpFormData): boolean => {
        // @ts-ignore
        const { fname, lname, birthday, email, password, termsAccepted } = value;

        return fname !== undefined
            && lname !== undefined
            && birthday !== undefined
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
                    placeholder={translate('FIRST_NAME_EXAMPLE')}
                    label={translate('FIRST_NAME')}
                    autoCapitalize='words'
                    validator={NameValidator}
                    onChangeText={this.onFirstNameInputTextChange}
                />
                <ValidationInput
                    style={themedStyle.input}
                    textStyle={textStyle.paragraph}
                    labelStyle={textStyle.label}
                    placeholder={translate('FIRST_NAME_EXAMPLE')}
                    label={translate('FIRST_NAME')}
                    autoCapitalize='words'
                    validator={NameValidator}
                    onChangeText={this.onLastNameValidationResult}
                />
                <ValidationInput
                    style={themedStyle.input}
                    textStyle={textStyle.paragraph}
                    labelStyle={textStyle.label}
                    placeholder={translate('BIRTH_DAY_EXAMPLE')}
                    label={translate('BIRTH_DAY')}
                    validator={DOBValidator}
                    onChangeText={this.onDateInputTextChange}
                />
                <ValidationInput
                    style={themedStyle.input}
                    textStyle={themedStyle.inputText}
                    labelStyle={themedStyle.inputLabel}
                    placeholder={translate('EMAIL_EXAMPLE')}
                    label={translate('EMAIL')}
                    validator={EmailValidator}
                    onChangeText={this.onEmailInputTextChange}
                />
                <ValidationInput
                    style={themedStyle.input}
                    textStyle={textStyle.paragraph}
                    labelStyle={textStyle.label}
                    captionTextStyle={textStyle.paragraph}
                    label={translate('PASSWORD')}
                    placeholder={translate('PASSWORD')}
                    caption={this.passwordCaption()}
                    secureTextEntry={true}
                    validator={PasswordValidator}
                    onChangeText={this.onPasswordInputTextChange}
                />
                <Radio
                    style={themedStyle.genderRadio}
                    textStyle={themedStyle.termsCheckBoxText}
                    text={translate('MALE')}
                    checked={this.state.gender === 'male'}
                    onChange={this.onGenderMaleChange}
                />
                <Radio
                    style={themedStyle.genderRadio}
                    textStyle={themedStyle.termsCheckBoxText}
                    text={translate('FEMALE')}
                    checked={this.state.gender === 'female'}
                    onChange={this.onGenderFemaleChange}
                />
                <CheckBox
                    style={themedStyle.termsCheckBox}
                    textStyle={themedStyle.termsCheckBoxText}
                    checked={this.state.termsAccepted}
                    text={translate('SIGN_UP_CHECKBOX_CGU_LABEL')}
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
    genderRadio: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row'
    },
    termsCheckBoxText: {
        fontSize: 11,
        color: theme['text-hint-color'],
        ...textStyle.paragraph,
    },
}));

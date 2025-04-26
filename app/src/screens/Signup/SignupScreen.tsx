import { TextInput, Text, View, Pressable } from "react-native"
import SignupStyles from './SignupStyles';

const SignupScreen: React.FC = () => {
    return (
        <View>
            <Text style={SignupStyles.Title}>Archerybuddy</Text>

            <TextInput
                style={SignupStyles.Inputs}
                placeholder="Please Enter Your Email"
                onChangeText={() => {
                    console.log('test')
                }}
                textContentType="emailAddress">
            </TextInput>

            <TextInput
                style={SignupStyles.Inputs}
                placeholder="Please Enter Your Wanted Username"
                onChangeText={() => {
                    console.log('test')
                }}
                textContentType="username">
            </TextInput>

            <TextInput
                style={SignupStyles.Inputs}
                placeholder="Please Enter Your Password"
                onChangeText={() => {
                    console.log('test')
                }}
                textContentType="newPassword">
            </TextInput>

            <View style={SignupStyles.ButtonContainer}>
                <Pressable style={SignupStyles.Buttons}>
                    <Text style={SignupStyles.ButtonText}>Create new user</Text>
                </Pressable>
            </View>

            <View style={{borderBottomColor: "black", alignSelf:'stretch'}} />
        </View>
    )
}

export default SignupScreen
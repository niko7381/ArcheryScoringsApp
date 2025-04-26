import { useState } from "react";
import { View, Text, TextInput, Pressable, KeyboardAvoidingView, Platform } from "react-native";
import LoginStyles from './LoginScreenStyles';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { useNavigation } from '@react-navigation/native';
import LoginScreenStyles from "./LoginScreenStyles";

const LoginScreen: React.FC = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={LoginScreenStyles.Container}>
            <View>
                <Text style={LoginStyles.Title}>Archerybuddy</Text>
                <TextInput
                    style={LoginStyles.Input}
                    placeholder="Enter Username"
                    onChangeText={setUserName}
                    defaultValue={userName}
                    textContentType="username"
                />
                <TextInput
                    style={LoginStyles.Input}
                    placeholder="Enter Password"
                    onChangeText={setPassword}
                    defaultValue={password}
                    textContentType="password"
                    secureTextEntry={true}
                />
                
                <View style={LoginStyles.LoginButtonContainer}>
                    <Pressable onPress={() => navigation.navigate("Home")} style={LoginStyles.LoginButton}>
                        <Text style={LoginStyles.ButtonText}>Login</Text>
                    </Pressable>
                </View>
                
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                        <View>
                            <Text style={{width: 50, textAlign: 'center'}}>Or</Text>
                        </View>
                    <View style={{flex: 1, height: 1, backgroundColor: 'black'}} />
                </View>

                <View style={LoginStyles.ButtonContainer}>
                    <Pressable onPress={() => navigation.navigate("Signup")} style={LoginStyles.Buttons}>
                        <Text style={LoginStyles.ButtonText}>Signup</Text>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate("Home")} style={LoginStyles.Buttons}>
                        <Text style={LoginStyles.ButtonText}>Forgot Password</Text>
                    </Pressable>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default LoginScreen;
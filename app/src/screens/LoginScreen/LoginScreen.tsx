import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import LoginStyles from './LoginScreenStyles';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../navigation/RootNavigator";
import { useNavigation } from '@react-navigation/native';

const LoginScreen: React.FC = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View>
            <Text style={LoginStyles.Title}>Archerybuddy</Text>
            <TextInput
                style={LoginStyles.Input}
                placeholder="Enter Username"
                onChangeText={setUserName}
                defaultValue={userName}
            />
            <TextInput
                style={LoginStyles.Input}
                placeholder="Enter Password"
                onChangeText={setPassword}
                defaultValue={password}
            />
            
            <View style={LoginStyles.LoginButtonContainer}>
                <Pressable onPress={() => navigation.navigate("Home")} style={LoginStyles.LoginButton}>
                    <Text style={LoginStyles.ButtonText}>Login</Text>
                </Pressable>
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
    );
};

export default LoginScreen;
import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import LoginStyles from './LoginScreenStyles';

const LoginScreen: React.FC = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <View>
            <Text style={LoginStyles.Title}>Archerybuddy</Text>
            <TextInput
                style={LoginStyles.Input}
                placeholder="Enter Username"
                onChangeText={userName => setUserName(userName)}
                defaultValue={userName}
            />
            <TextInput
                style={LoginStyles.Input}
                placeholder="Enter Password"
                onChangeText={password => setPassword(password)}
                defaultValue={password}
            />
            <View style={LoginStyles.Buttons}>
                <Button
                    title="Login"
                    onPress={() => {
                        console.log("Login Pressed")
                    }}
                />
                <Button
                    title="Signup"
                    onPress={() => {
                        console.log("Signup Pressed")
                    }}
                />
            </View>
        </View>
    );
};

export default LoginScreen;
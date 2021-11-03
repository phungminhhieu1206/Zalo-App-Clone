import React from 'react'
import {
    View,
    Image,
    Text,
    useWindowDimensions,
    Pressable,
    TouchableOpacity
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeHeader = () => {
    const { width } = useWindowDimensions();
    const navigation = useNavigation();

    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width,
            padding: 10,
            alignItems: 'center',
            marginLeft: -12,
            backgroundColor: '#019ff8'
        }}>
            <Image
                source={{ uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg' }}
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: 20
                }}
            />
            <Text style={{
                flex: 1,
                textAlign: 'center',
                marginLeft: 25,
                fontWeight: 'bold',
                fontSize: 20
            }}>Timeline</Text>
            <TouchableOpacity onPress={() => console.warn('clicked camera of timeline')}>
                <Feather
                    name="camera"
                    size={24}
                    color="black"
                    style={{
                        marginHorizontal: 10
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("NewPost")}>
                <Feather
                    name="edit-2"
                    size={24}
                    color="black"
                    style={{
                        marginHorizontal: 10,
                        marginRight: 20
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default HomeHeader

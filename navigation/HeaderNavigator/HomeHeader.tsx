import React from 'react'
import {
    View,
    Image,
    Text,
    useWindowDimensions,
    Pressable,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const HomeHeader = () => {
    const { width } = useWindowDimensions();

    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            width,
            padding: 10,
            alignItems: 'center',
            marginLeft: -12
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
            }}>Home</Text>
            <Pressable onPress={() => console.warn('clicked camera')}>
                <Feather
                    name="camera"
                    size={24}
                    color="black"
                    style={{
                        marginHorizontal: 10
                    }}
                />
            </Pressable>
            <Pressable onPress={() => console.warn('clicked pencil')}>
                <Feather
                    name="edit-2"
                    size={24}
                    color="black"
                    style={{
                        marginHorizontal: 10,
                        marginRight: 20
                    }}
                />
            </Pressable>
        </View>
    )
}

export default HomeHeader

import React from 'react'
import {
    View,
    useWindowDimensions,
    TouchableOpacity,
    TextInput,
    Text
} from "react-native";
import {
    AntDesign,
    EvilIcons,
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeHeader = () => {
    const { width } = useWindowDimensions();

    const navigation = useNavigation();

    return (
        <View style={{
            flex: 1,
            flexDirection: 'row',
            width,
            padding: 10,
            alignItems: 'center',
            marginLeft: -16,
            backgroundColor: '#019ff8'
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('SearchFriend')}>
                <EvilIcons
                    name="search"
                    size={32}
                    color="white"
                    style={{
                        marginLeft: -5
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    flex: 1,
                }}
                onPress={() => navigation.navigate('SearchFriend')}
            >
                <Text
                    numberOfLines={1}
                    style={{
                        height: '100%',
                        color: 'white',
                        textAlignVertical: 'center',
                        fontSize: 16,
                        marginLeft: 18,
                    }}
                >Search friends, messages...</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("NewPost")}>
                <FontAwesome
                    name="pencil-square-o"
                    size={25}
                    color="white"
                    style={{
                        marginRight: 25
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.warn('clicked nitify of home')}>
                <Ionicons
                    name="notifications-outline"
                    size={22}
                    color="white"
                    style={{
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default HomeHeader

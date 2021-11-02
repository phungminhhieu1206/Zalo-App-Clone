import React from 'react'
import {
    View,
    Image,
    Text,
    useWindowDimensions,
    Pressable,
} from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from 'react-native-gesture-handler';

const ChatRoomHeader = () => {
    const { width } = useWindowDimensions();

    // console.log(props);

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width,
            padding: 10,
            alignItems: 'center',
            marginLeft: -30,
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
                textAlign: 'left',
                fontWeight: 'bold',
                fontSize: 20,
                paddingLeft: 10
            }}>Username</Text>
            <TouchableOpacity>
                <Feather
                    name="phone"
                    size={24}
                    color="black"
                    style={{
                        marginHorizontal: 10,
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <AntDesign
                    name="videocamera"
                    size={24}
                    color="black"
                    style={{
                        marginHorizontal: 5,
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Feather
                    name="more-vertical"
                    size={24}
                    color="black"
                    style={{
                        marginHorizontal: 5,
                        marginRight: 35
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default ChatRoomHeader

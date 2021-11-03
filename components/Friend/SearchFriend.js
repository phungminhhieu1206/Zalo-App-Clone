import { EvilIcons } from '@expo/vector-icons'
import React from 'react'
import {
    View,
    Text,
    ScrollView,
    Image,
    StyleSheet,
    TouchableOpacity,
    Pressable
} from 'react-native'
import { USERS } from '../../assets/fake-data/User_fake'
import { useNavigation } from '@react-navigation/core'

const SearchFriend = () => {

    const navigation = useNavigation();

    const onPressHandle = () => {
        // console.warn('pressed on: ', user.name);

        navigation.navigate('ChatRoom', { id: '2' });
        // console.warn(chatRoom.id);
    }

    return (
        <View style={{
            backgroundColor: 'white',
            flex: 1
        }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 17,
                paddingTop: 5,
                paddingBottom: 10
            }}>
                <Text style={{

                }}>Recent search</Text>
                <TouchableOpacity>
                    <Text style={{
                        color: '#019ff8'
                    }}>Edit</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                borderBottomColor: 'lightgrey',
                borderBottomWidth: 1,
                paddingBottom: 5,
            }}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                >
                    {USERS.map((story, index) => (

                        <TouchableOpacity
                            onPress={onPressHandle}
                            key={index}
                            style={{
                                alignItems: 'center'
                            }}
                        >
                            < Image
                                source={{ uri: story.image }}
                                style={{
                                    width: 54,
                                    height: 54,
                                    borderRadius: 27,
                                    marginHorizontal: 17,
                                    marginVertical: 7
                                }}
                            />
                            <Text
                                numberOfLines={2}
                                style={{
                                    color: 'black',
                                    maxWidth: 75,
                                    height: 40,
                                    textAlign: 'center',
                                    textAlignVertical: 'center',
                                    fontSize: 14,
                                }}
                            >{story.user}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>
            <View>
                <ScrollView>
                    <TouchableOpacity style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        padding: 15
                    }}>
                        <EvilIcons
                            name="search"
                            size={24}
                            color="black"
                            style={{
                                marginRight: 15
                            }}
                        />
                        <Text>Demo Text</Text>
                    </TouchableOpacity>

                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
})

export default SearchFriend

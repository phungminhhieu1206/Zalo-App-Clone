import { EvilIcons, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const MyChannelSetting = () => {
    return (
        <View >
            <View style={{
                backgroundColor: 'white',
            }}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <EvilIcons
                        name="lock"
                        size={33}
                        color="#3C80F5"
                        style={{
                            marginHorizontal: 10
                        }}
                    />
                    <Text style={{
                        fontSize: 18,
                        color: 'black',
                        flex: 1,
                        paddingVertical: 9,
                        borderBottomWidth: 0.5,
                        borderBottomColor: 'lightgrey'
                    }}>Privacy</Text>
                    <MaterialIcons
                        name="navigate-next"
                        size={28}
                        color="black"
                        style={{
                            marginRight: 10
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <MaterialIcons
                        name="security"
                        size={24}
                        color="#30C860"
                        style={{
                            marginLeft: 16,
                            marginRight: 14
                        }}
                    />
                    <Text style={{
                        fontSize: 18,
                        color: 'black',
                        flex: 1,
                        paddingVertical: 9,
                        borderBottomWidth: 0.5,
                        borderBottomColor: 'lightgrey'
                    }}>Account and security</Text>
                    <MaterialIcons
                        name="navigate-next"
                        size={28}
                        color="black"
                        style={{
                            marginRight: 10
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Fontisto
                        name="cloud-refresh"
                        size={20}
                        color="#362DBB"
                        style={{
                            marginLeft: 17,
                            marginRight: 15
                        }}
                    />
                    <Text style={{
                        fontSize: 18,
                        color: 'black',
                        flex: 1,
                        paddingVertical: 9,
                        borderBottomWidth: 0.5,
                        borderBottomColor: 'lightgrey'
                    }}>Backup and restore</Text>
                    <MaterialIcons
                        name="navigate-next"
                        size={28}
                        color="black"
                        style={{
                            marginRight: 10
                        }}
                    />
                </TouchableOpacity>

            </View>

            <View style={{
                marginTop: 10,
                backgroundColor: 'white',
            }}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Ionicons
                        name="notifications-outline"
                        size={22}
                        color="#F01414"
                        style={{
                            marginLeft: 18,
                            marginRight: 15
                        }}
                    />
                    <Text style={{
                        fontSize: 18,
                        color: 'black',
                        flex: 1,
                        paddingVertical: 9,
                        borderBottomWidth: 0.5,
                        borderBottomColor: 'lightgrey'
                    }}>Notifications</Text>
                    <MaterialIcons
                        name="navigate-next"
                        size={28}
                        color="black"
                        style={{
                            marginRight: 10
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Ionicons
                        name="ios-chatbubble-ellipses-outline"
                        size={22}
                        color="#14AAF0"
                        style={{
                            marginLeft: 19,
                            marginRight: 14
                        }}
                    />
                    <Text style={{
                        fontSize: 18,
                        color: 'black',
                        flex: 1,
                        paddingVertical: 9,
                        borderBottomWidth: 0.5,
                        borderBottomColor: 'lightgrey'
                    }}>Messages</Text>
                    <MaterialIcons
                        name="navigate-next"
                        size={28}
                        color="black"
                        style={{
                            marginRight: 10
                        }}
                    />
                </TouchableOpacity>
            </View>


            <View style={{
                marginTop: 10,
                backgroundColor: 'white',
            }}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <MaterialCommunityIcons
                        name="account-convert-outline"
                        size={22}
                        color="#F0B914"
                        style={{
                            marginLeft: 19,
                            marginRight: 14
                        }}
                    />
                    <Text style={{
                        fontSize: 18,
                        color: 'black',
                        flex: 1,
                        paddingVertical: 9,
                        borderBottomWidth: 0.5,
                        borderBottomColor: 'lightgrey'
                    }}>Switch account</Text>
                    <MaterialIcons
                        name="navigate-next"
                        size={28}
                        color="black"
                        style={{
                            marginRight: 10
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <MaterialCommunityIcons
                        name="logout"
                        size={24}
                        color="black"
                        style={{
                            marginLeft: 21,
                            marginRight: 11
                        }}
                    />
                    <Text style={{
                        fontSize: 18,
                        color: 'black',
                        flex: 1,
                        paddingVertical: 9,
                    }}>Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyChannelSetting

import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const MyChannelSetup = () => {
    return (
        <View >
            <View style={{
                backgroundColor: 'white',
                paddingLeft: 18,
            }}>
                <TouchableOpacity
                    style={{
                        paddingVertical: 12,
                        borderBottomColor: 'lightgrey',
                        borderBottomWidth: 0.5,

                    }}
                >
                    <Text style={{
                        fontSize: 17,
                        color: 'black'
                    }}>Info</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        paddingVertical: 12,
                        borderBottomColor: 'lightgrey',
                        borderBottomWidth: 0.5,

                    }}
                >
                    <Text style={{
                        fontSize: 17,
                        color: 'black'
                    }}>Update Profile Picture</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        paddingVertical: 12,
                        borderBottomColor: 'lightgrey',
                        borderBottomWidth: 0.5,

                    }}
                >
                    <Text style={{
                        fontSize: 17,
                        color: 'black'
                    }}>Update Cover</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        paddingVertical: 12,
                        borderBottomColor: 'lightgrey',
                        borderBottomWidth: 0.5,

                    }}
                >
                    <Text style={{
                        fontSize: 17,
                        color: 'black'
                    }}>Update Bio</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        paddingVertical: 12,
                    }}
                >
                    <Text style={{
                        fontSize: 17,
                        color: 'black'
                    }}>My ZaloPay</Text>
                </TouchableOpacity>
            </View>
            <View style={{
                marginTop: 10,
                backgroundColor: 'white',
                paddingLeft: 18,
            }}>
                <Text style={{
                    color: '#0186fe',
                    fontSize: 18,
                    paddingTop: 5
                }}>Settings</Text>
                <TouchableOpacity
                    style={{
                        paddingVertical: 12,
                        borderBottomColor: 'lightgrey',
                        borderBottomWidth: 0.5,

                    }}
                >
                    <Text style={{
                        fontSize: 17,
                        color: 'black'
                    }}>My QR Code</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        paddingVertical: 12,
                        borderBottomColor: 'lightgrey',
                        borderBottomWidth: 0.5,

                    }}
                >
                    <Text style={{
                        fontSize: 17,
                        color: 'black'
                    }}>Privacy</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        paddingVertical: 12,
                        borderBottomColor: 'lightgrey',
                        borderBottomWidth: 0.5,

                    }}
                >
                    <Text style={{
                        fontSize: 17,
                        color: 'black'
                    }}>My Account</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{
                        paddingVertical: 12,
                        borderBottomColor: 'lightgrey',
                        borderBottomWidth: 0.5,

                    }}
                >
                    <Text style={{
                        fontSize: 17,
                        color: 'black'
                    }}>General settings</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default MyChannelSetup

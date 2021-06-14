import React, { useState, useEffect } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Animated,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from 'react-native'
import {
    ICONS,
    COLORS,
    IMAGES,
    FONTS,
    SIZES
} from '../../constants'

export default function RestaurantScreen({ route, navigation }: any) {

    const [restaurant, setRestaurant] = useState(null)
    const [currentLocation, setCurrentLocation] = useState(null)

    useEffect(() => {
        let { item, currentLocation } = route.params

        setRestaurant(item)
        setCurrentLocation(currentLocation)
    }, [])


    const renderHeader = () => {
        return (
            <View style={{ flexDirection: "row", paddingRight: "3%", paddingTop: '2%' }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: "center",
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={ICONS.back}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,

                        }}
                    />
                </TouchableOpacity>

                {/* Restaurant Name Section */}
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <View
                        style={{
                            height: 50,
                            alignItems: "center",
                            justifyContent: "center",
                            paddingHorizontal: SIZES.padding * 3,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.lightGray3
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{restaurant?.name}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: "center"
                    }}
                    onPress={() => navigation.goBack()}
                >
                    <Image
                        source={ICONS.list}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30,
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView
            style={styles.container}
        >
            {renderHeader()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray2
    }
})

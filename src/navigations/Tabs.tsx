import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs'
import { TabBarCustomButton } from '../components/organisms/navigations'
import { HomeScreen } from '../screens/home'
import { COLORS, ICONS } from '../constants'

const Tab = createBottomTabNavigator()

export default function Tabs() {

    const CustomTabBar = (props: any) => {

        return (
            <BottomTabBar
                {...props.props}
            />
        )
    }

    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    borderTopWidth: 0,
                    backgroundColor: 'transparent',
                    elevation: 0,
                }
            }}
            tabBar={(props) => (
                <CustomTabBar
                    props={props}
                />
            )}
        >
            <Tab.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={ICONS.cutlery}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="SearchScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={ICONS.search}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="FavoritesScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={ICONS.like}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />

            <Tab.Screen
                name="UsersScreen"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={ICONS.user}
                            resizeMode='contain'
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomButton
                            {...props}
                        />
                    )
                }}
            />
        </Tab.Navigator >
    )
}

const styles = StyleSheet.create({})

type TabBarCustomButtonType = {
    accessibilityState: any
    children: any
    onPress: any
}
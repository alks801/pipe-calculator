import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class StaticRow extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.label}>
                    <Text>{this.props.label}</Text>
                </View>
                <View style={styles.text}>
                    <Text>{this.props.text}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    label: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    text: {
        flex: 0.3,
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 50
    }
})

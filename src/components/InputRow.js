import React from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'

export default class InputRow extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.text}>
                    <Text>{this.props.text}</Text>
                </View>
                <View style={styles.input}>
                    <TextInput
                    textAlign={'center'}
                        style={{ width: '100%', height: 50 }}
                        editable={true}
                        maxLength={4}
                        keyboardType="numeric"
                        onChangeText={this.props.onChangeHandler}
                        value={this.props.value}
                    />
                </View>
                <View style={styles.post}>
                <Text> {this.props.measure}</Text>
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
    text: {
        flex: 0.3,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    input: {
        flex: 0.5,
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        height: 50
    },
    post: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})

import React from 'react'
import { StyleSheet, View, Text, Picker } from 'react-native'

export default class PickerRow extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.text}>
                    <Text>{this.props.text}</Text>
                </View>
                <View style={styles.picker}>
                    <Picker
                        selectedValue={this.props.selectedText}
                        style={{ width: '100%', flex: 0.5 }}
                        onValueChange={this.props.valueChanged}
                    >
                        {this.props.items.map(m => {
                            return (
                                <Picker.Item
                                    label={m.name}
                                    value={m.density}
                                    key={m.name}
                                />
                            )
                        })}
                    </Picker>
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
    picker: {
        flex: 0.5,
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 65
    }
})

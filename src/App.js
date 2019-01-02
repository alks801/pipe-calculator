import React from 'react'
import {
	StyleSheet,
	Button,
	Text,
	View,
	Image,
	KeyboardAvoidingView,
	Keyboard
} from 'react-native'
import PickerRow from './components/PickerRow'
import InputRow from './components/InputRow'
import StaticRow from './components/StaticRow'

const Pi = 3.14159265359

const Materials = [
	{ name: '09Г2С', density: 7800 },
	{ name: '15ХСНД', density: 7850 },
	{ name: 'Сталь 20', density: 7859 },
	{ name: 'Х67', density: 7810 },
	{ name: 'X70', density: 7815 }
]

export default class App extends React.Component {
	componentDidMount() {
		this.keyboardDidShowListener = Keyboard.addListener(
			'keyboardDidShow',
			() => {
				this.setState({ KeyBoardShowed: true })
			}
		)
		this.keyboardDidHideListener = Keyboard.addListener(
			'keyboardDidHide',
			() => {
				this.setState({ KeyBoardShowed: false })
			}
		)
	}

	componentWillUnmount() {
		this.keyboardDidShowListener.remove()
		this.keyboardDidHideListener.remove()
	}

	state = {
		S: 0, //толщина стенки в мм
		D: 0, //наружный диаметр в мм
		L: 0, //длинна трубы в метрах
		m: 0, //масса
		P: Materials[0].density,
		KeyBoardShowed: false
	}

	calculateMass() {
		let { S, D, L, P } = { ...this.state }
		let res = Pi * P * S * L * (D - S) / 1000000
		console.log(Pi, S, D, L, P, res)
		this.setState({ m: res })
	}

	pickerValueChangedHandler = (itemValue, itemIndex) => {
		console.log(itemValue)
		this.setState({ P: itemValue })
	}

	inputHandler = (prop, text) => {
		let obj = {}
		if (text.startsWith('0')) text = text.substr(1)
		obj[prop] = text
		this.setState(obj)
	}

	render() {
		return (
			<KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
				<View style={styles.header}>
					<Text style={styles.textHeader}>Калькулятор массы трубы</Text>
				</View>
				<View style={styles.imgContainer}>
					{this.state.KeyBoardShowed ? null : (
						<Image source={require('./pipe.png')} />
					)}
				</View>
				<View style={styles.workflow}>
					<PickerRow
						text="Сталь:"
						selectedText={this.state.P}
						items={Materials}
						valueChanged={this.pickerValueChangedHandler}
					/>
					<StaticRow label="P:" text={this.state.P + ' кг/м3'} />
					<InputRow
						text="D:"
						onChangeHandler={text => this.inputHandler('D', text)}
                        value={this.state.D + ''}
                        measure="мм"
					/>
					<InputRow
						text="S:"
						onChangeHandler={text => this.inputHandler('S', text)}
                        value={this.state.S + ''}
                        measure="мм"
					/>
					<InputRow
						text="L:"
						onChangeHandler={text => this.inputHandler('L', text)}
                        value={this.state.L + ''}
                        measure="м"
					/>
				</View>
				<View style={styles.massContainer}>
					<Text>m = Pi * P * S * L * (D - S) = </Text>
					<Text style={{ fontSize: 24 }}>{this.state.m} кг</Text>
				</View>
				<View style={styles.calcContainer}>
					<Button
						onPress={() => this.calculateMass()}
						title="Рассчитать массу"
					/>
				</View>
			</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
	header: {
		height: 70,
		width: '100%',
		backgroundColor: 'skyblue',
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomColor: '#eee',
		borderStyle: 'solid',
		borderBottomWidth: 1,
		paddingTop: 30
	},
	textHeader: {
		fontSize: 16
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'column'
	},
	imgContainer: {
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center'
	},
	workflow: {
		flex: 1,
		width: '100%'
	},
	massContainer: {
		height: 70,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center'
	},
	calcContainer: {
		height: 80,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		borderTopColor: 'skyblue',
		borderStyle: 'solid',
		borderTopWidth: 1
	}
})

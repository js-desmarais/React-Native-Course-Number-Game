import { useState } from 'react';
import { Alert, StyleSheet, TextInput, View } from 'react-native';

import Card from '../components/ui/Card';
import Instructions from '../components/ui/Instructions';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

import { commonStyles } from '../styles/commonStyles';
import { COLORS } from '../utils/colors';

export default function StartGameScreen({ onPickNumber }) {
	const [enteredNumber, setEnteredNumber] = useState('');

	function inputHandler(enteredText) {
		setEnteredNumber(enteredText);
	}

	function resetInputHandler() {
		setEnteredNumber('');
	}

	function confirmInputHandler() {
		const chosenNumber = parseInt(enteredNumber);

		if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
			Alert.alert('Invalid Number!', 'Number has to be a number between 1 and 99.', [
				{ text: 'Okay', style: 'destructive', onPress: resetInputHandler },
			]);
			return;
		}

		onPickNumber(chosenNumber);
	}

	return (
		<View style={styles.container}>
			<Title>Guess My Number</Title>
			<Card>
				<Instructions>Please enter a number between 1 and 99...</Instructions>
				<TextInput
					style={styles.numberInput}
					maxLength={2}
					keyboardType='number-pad'
					returnKeyType='done'
					autoCapitalize='none'
					autoCorrect={false}
					onChangeText={inputHandler}
					value={enteredNumber}
				/>
				<View style={commonStyles.buttonsContainer}>
					<View style={commonStyles.buttonContainer}>
						<PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
					</View>
					<View style={commonStyles.buttonContainer}>
						<PrimaryButton onPress={confirmInputHandler}>Confirm?</PrimaryButton>
					</View>
				</View>
			</Card>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 100,
		alignItems: 'center',
		// padding: 24,
		// backgroundColor: COLORS.primary500,
	},

	// inputContainer: {
	// 	padding: 16,
	// 	marginHorizontal: 24,
	// 	marginTop: 50,
	// 	backgroundColor: COLORS.primary800,
	// 	borderRadius: 8,
	// 	alignItems: 'center',
	// 	justifyContent: 'center',

	// 	// android shadow
	// 	elevation: 8,

	// 	// iOS shadow
	// 	shadowColor: 'black',
	// 	shadowOffset: {
	// 		width: 1,
	// 		height: 2,
	// 	},
	// 	shadowRadius: 6,
	// 	shadowOpacity: 0.25,
	// },

	numberInput: {
		// height: 50, // BUG initially had 50 but the text gets clipped at the top.
		width: 50,
		fontSize: 32,
		borderBottomColor: COLORS.accent500,
		borderBottomWidth: 2,
		color: COLORS.accent500,
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

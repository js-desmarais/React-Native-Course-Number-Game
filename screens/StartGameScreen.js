import { StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

export default function StartGameScreen() {
	return (
		<View style={styles.inputContainer}>
			<TextInput style={styles.numberInput} maxLength={2} />
			<PrimaryButton>Reset</PrimaryButton>
			<PrimaryButton>Confirm?</PrimaryButton>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		padding: 16,
		marginTop: 100,
		marginHorizontal: 24,
		backgroundColor: '#72063c',
		borderRadius: 8,

		// android shadow
		elevation: 8,

		// iOS shadow
		shadowColor: 'black',
		shadowOffset: {
			width: 1,
			height: 2,
		},
		shadowRadius: 6,
		shadowOpacity: 0.25,
	},

	numberInput: {
		// height: 60, BUG initially had 50 but the text gets clipped at the top.
		width: 50,
		fontSize: 32,
		borderBottomColor: '#ddb52f',
		borderBottomWidth: 2,
		color: '#ddb52f',
		marginVertical: 8,
		fontWeight: 'bold',
		textAlign: 'center',
	},
});

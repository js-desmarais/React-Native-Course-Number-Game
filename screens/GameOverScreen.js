import { StyleSheet, Text, View, Image } from 'react-native';

import { COLORS } from '../utils/colors';
import PrimaryButton from '../components/ui/PrimaryButton';

export default function GameOverScreen({ numberOfGuesses, userNumber, onGameRestart }) {
	return (
		<View style={styles.rootContainer}>
			<Text>Game Over!</Text>
			<View style={styles.imageContainer}>
				<Image
					source={require('../assets/images/success.png')}
					style={styles.image}
				/>
			</View>
			<Text style={styles.summaryText}>
				Your phone took <Text style={styles.highlightedText}>{numberOfGuesses}</Text>{' '}
				attempts to guess the number
				<Text style={styles.highlightedText}>{userNumber}</Text>.
			</Text>
			<PrimaryButton onPress={onGameRestart}>Restart Game</PrimaryButton>
		</View>
	);
}

const styles = StyleSheet.create({
	rootContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 24,
	},

	imageContainer: {
		width: 300,
		height: 300,
		borderRadius: 500,
		borderWidth: 3,
		borderColor: COLORS.primary800,
		overflow: 'hidden',
		margin: 36,
		alignItems: 'center',
		justifyContent: 'center',
	},

	image: {
		width: '100%',
		height: '100%',
	},

	summaryText: {
		fontFamily: 'open-sans',
		fontSize: 24,
		textAlign: 'center',
		marginBottom: 24,
	},

	highlightedText: {
		fontFamily: 'open-sans-bold',
		color: COLORS.primary500,
	},
});

import { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import Instructions from '../components/ui/Instructions';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

import { commonStyles } from '../styles/commonStyles';

function generateRandomBetween(min, max, exclude) {
	const rndNum = Math.floor(Math.random() * (max - min)) + min;

	if (rndNum === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return rndNum;
	}
}

let minBoundary = 1,
	maxBoundary = 100;

export default function GameScreen({ userNumber, onGameOver }) {
	const initialGuess = generateRandomBetween(1, 100, userNumber);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	useEffect(() => {
		if (currentGuess === userNumber) {
			onGameOver();

			Alert.alert('You won!', 'Congratulations!', [
				{ text: 'Play again', style: 'cancel' },
			]);
		}
	}, [currentGuess, userNumber, onGameOver]);

	function nextGuessHandler(direction) {
		// honesty check
		if (
			(direction === 'lower' && currentGuess < userNumber) ||
			(direction === 'greater' && currentGuess > userNumber)
		) {
			Alert.alert("Don't lie!", 'You know this is wrong...', [
				{ text: 'Sorry!', style: 'cancel' },
			]);
			return;
		}

		// game logic
		if (direction === 'lower') {
			maxBoundary = currentGuess;
		} else {
			minBoundary = currentGuess + 1;
		}

		const newRndNum = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
		setCurrentGuess(newRndNum);
	}

	return (
		<View style={styles.screen}>
			<Title>Opponent's guess</Title>
			<NumberContainer>{currentGuess}</NumberContainer>
			<Card>
				<Instructions style={styles.instructionsText}>Higher or lower?</Instructions>
				<View style={commonStyles.buttonsContainer}>
					<View style={commonStyles.buttonContainer}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
							<Ionicons
								name='remove'
								size={24}
								color='white'
							/>
						</PrimaryButton>
					</View>
					<View style={commonStyles.buttonContainer}>
						<PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
							<Ionicons
								name='add'
								size={24}
								color='white'
							/>
						</PrimaryButton>
					</View>
				</View>
			</Card>
			{/* <View>Log Rounds</View> */}
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		padding: 24,
		// alignItems: 'center',
		// justifyContent: 'center',
	},

	instructionsText: {
		marginBottom: 24,
	},
});

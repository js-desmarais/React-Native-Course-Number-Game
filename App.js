import { useEffect, useState } from 'react';
import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { COLORS } from './utils/colors';

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [userNumber, setUserNumber] = useState();
	const [gameIsOver, setGameIsOver] = useState(false);

	const [loaded, error] = useFonts({
		'open-sans': require('./assets/fonts/open-sans.regular.ttf'),
		'open-sans-bold': require('./assets/fonts/open-sans.bold.ttf'),
	});

	useEffect(() => {
		if (loaded) {
			SplashScreen.hideAsync();
			console.log('Fonts loaded!');
		}

		if (error) {
			console.error(`Fonts could not be loaded. Error: ${error}`);
		}
	}, [loaded, error]);

	if (!loaded && !error) {
		console.warn('Fonts not loaded yet');

		return null;
	}

	function pickedNumberHandler(pickedNumber) {
		setUserNumber(pickedNumber);
	}

	function gameOverHandler() {
		setGameIsOver(true);
	}

	let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;

	if (userNumber) {
		screen = (
			<GameScreen
				userNumber={userNumber}
				onGameOver={gameOverHandler}
			/>
		);
	}

	if (gameIsOver) {
		console.log('Game is over');
		screen = <GameOverScreen />;
	}

	return (
		<LinearGradient
			style={styles.appContainer}
			colors={
				[COLORS.accent500, COLORS.primary800] // NOTE this is a linear gradient from top to bottom.
			}
		>
			<ImageBackground
				source={require('./assets/images/background.png')}
				resizeMode='cover'
				style={styles.appContainer}
				imageStyle={{ opacity: 0.15 }}
			>
				<SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		// height: '100%', // NOTE this works but in this context has the same effect as flex: 1.
		flex: 1,
	},
});

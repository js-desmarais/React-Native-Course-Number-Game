import {
	Image,
	StyleSheet,
	Text,
	useWindowDimensions,
	View,
	ScrollView,
} from 'react-native';

import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import { commonStyles } from '../styles/commonStyles';
import { COLORS } from '../utils/colors';

export default function GameOverScreen({ numberOfGuesses, userNumber, onGameRestart }) {
	const { width, height } = useWindowDimensions();

	let imageSize = 300;

	if (width < 380) {
		imageSize = 150;
	}

	if (height < 420) {
		imageSize = 100;
	}

	const imageStyle = {
		width: imageSize,
		height: imageSize,
		borderRadius: imageSize / 2,
	};

	return (
		<ScrollView style={commonStyles.flexOne}>
			<View style={styles.rootContainer}>
				<Title>Game Over!</Title>
				<View style={{ ...styles.imageContainer, ...imageStyle }}>
					<Image
						source={require('../assets/images/success.png')}
						style={styles.image}
					/>
				</View>
				<Text style={styles.summaryText}>
					Your phone took <Text style={styles.highlightedText}>{numberOfGuesses}</Text>{' '}
					attempts to guess the number{' '}
					<Text style={styles.highlightedText}>{userNumber}</Text>.
				</Text>
				<PrimaryButton onPress={onGameRestart}>Restart Game</PrimaryButton>
			</View>
		</ScrollView>
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
		// width: windowDimensions.width < 380 ? 150 : 300,
		// height: windowDimensions.width < 380 ? 150 : 300,
		// borderRadius: 500,
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
		color: COLORS.primary300,
		textShadowColor: 'black',
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 4,
	},
});

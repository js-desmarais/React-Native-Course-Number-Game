import { StyleSheet, Text, View } from 'react-native';
import { COLORS, hexToRgba } from '../../utils/colors';
import { windowDimensions } from '../../utils/deviceAPI';

export default function NumberContainer({ children }) {
	return (
		<View style={styles.container}>
			<Text style={styles.numberText}>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: hexToRgba(COLORS.accent500, 0.6),

		padding: windowDimensions.witdh < 380 ? 12 : 24,
		margin: windowDimensions.witdh < 380 ? 12 : 24,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',
	},

	numberText: {
		color: COLORS.primary800,
		fontSize: windowDimensions.width < 380 ? 28 : 36,
		// fontWeight: 'bold',
		fontFamily: 'open-sans-bold',
	},
});

import { StyleSheet, Text, View } from 'react-native';
import { COLORS, hexToRgba } from '../../utils/colors';

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

		padding: 24,
		borderRadius: 8,
		margin: 24,
		alignItems: 'center',
		justifyContent: 'center',
	},

	numberText: {
		color: COLORS.primary800,
		fontSize: 36,
		// fontWeight: 'bold',
		fontFamily: 'open-sans-bold',
	},
});

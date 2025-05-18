import { StyleSheet, Text, View } from 'react-native';

import { COLORS } from '../../utils/colors';

export default function Card({ children, title, style }) {
	return (
		<View style={[styles.inputContainer, style]}>
			{title && <Text style={styles.cardTitle}>{title}</Text>}
			{children}
		</View>
	);
}

const styles = StyleSheet.create({
	cardTitle: {
		fontFamily: 'open-sans-bold',
		fontSize: 24,
		color: '#ccc',
		marginBottom: 12,
	},

	inputContainer: {
		padding: 16,
		marginHorizontal: 24,
		marginTop: 50,
		backgroundColor: COLORS.primary800,
		borderRadius: 8,
		alignItems: 'center',
		justifyContent: 'center',

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
});

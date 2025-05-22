import { StyleSheet, Text, Platform } from 'react-native';

import { COLORS } from '../../utils/colors';

export default function Title({ children }) {
	return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 24,
		// fontWeight: 'bold',
		textAlign: 'center',

		color: COLORS.primary800,
		borderColor: COLORS.primary800,
		// borderWidth: Platform.OS === 'android' ? 2 : 0,
		borderWidth: Platform.select({
			ios: 0,
			android: 2,
			default: 0,
		}),
		padding: 12,
	},
});

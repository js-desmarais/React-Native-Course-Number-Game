import { StyleSheet, Text } from 'react-native';
import { COLORS } from '../../utils/colors';

export default function Title({ children }) {
	return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 24,
		// fontWeight: 'bold',
		color: COLORS.primary800,
		textAlign: 'center',
	},
});

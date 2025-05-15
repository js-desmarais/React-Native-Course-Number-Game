import { StyleSheet, Text } from 'react-native';

import { COLORS } from '../../utils/colors';

export default function Instructions({ children, style }) {
	return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
	instructionText: {
		color: COLORS.accent500,
		fontSize: 24,
		marginBottom: 8,
		textAlign: 'center',
	},
});

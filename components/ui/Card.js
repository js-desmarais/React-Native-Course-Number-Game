import { StyleSheet, View } from 'react-native';

import { COLORS } from '../../utils/colors';

export default function Card({ children }) {
	return <View style={styles.inputContainer}>{children}</View>;
}

const styles = StyleSheet.create({
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

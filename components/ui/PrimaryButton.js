import { StyleSheet, Text, View, Pressable } from 'react-native';
import { COLORS } from '../../utils/colors';

export default function PrimaryButton({ children, onPress }) {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				onPress={onPress}
				android_ripple={{ color: COLORS.primary600 }}
				style={({ pressed }) =>
					pressed
						? [styles.buttonInnerContainer, styles.pressed]
						: styles.buttonInnerContainer
				}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 100,
		margin: 4,
		overflow: 'hidden',
	},

	buttonInnerContainer: {
		backgroundColor: COLORS.primary500,
		paddingVertical: 8,
		paddingHorizontal: 16,

		// android shadow
		elevation: 2,
	},

	buttonText: {
		color: 'white',
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
	},

	pressed: {
		opacity: 0.75,
	},
});

import { StyleSheet } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Button } from "@react-navigation/elements";

export default function StylingScreen() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.counter}>0</ThemedText>
            <ThemedView style={styles.buttonsContainer}>
                <ThemedView style={styles.buttonStyle}>
                    <Button>Increment</Button>
                </ThemedView>
                <ThemedView style={styles.buttonStyle}>
                    <Button>Decrement</Button>
                </ThemedView>
                <ThemedView style={styles.buttonStyle}>
                    <Button>Reset</Button>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    counter: {
        fontSize: 80,
        lineHeight: 60,
        fontWeight: "bold",
        marginBottom: 55,
    },
    buttonsContainer: {
        justifyContent: "center",
        width: "50%",
    },
    buttonStyle: {
        marginVertical: 30,
    },
});

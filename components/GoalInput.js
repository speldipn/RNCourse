import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import { Modal, Button, StyleSheet, TextInput, View } from "react-native";

function GoalInput({ visible, setVisible, text, setText, addText }) {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Input text"
          value={text}
          onChangeText={setText}
        />
        <View style={styles.buttonContainer}>
          <Button color="#1abc9c" title="Add" onPress={() => addText()} />
          <Button
            color="#ff0000"
            title="Cancel"
            onPress={() => setVisible(false)}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default GoalInput;

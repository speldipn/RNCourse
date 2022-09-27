import { useState } from "react";
import { StyleSheet, SafeAreaView, Button } from "react-native"; // core components
import uuid from "react-native-uuid";
import GoalInput from "./components/GoalInput";
import GoalList from "./components/GoalList";

export default function App() {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const addText = () => {
    setList([{ text, id: uuid.v4() }, ...list]);
    setText("");
    setModalIsVisible(false);
  };
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };
  return (
    <SafeAreaView style={styles.container}>
      <Button title="Add Goal" onPress={() => setModalIsVisible(true)} />
      <GoalInput
        visible={modalIsVisible}
        setVisible={setModalIsVisible}
        text={text}
        setText={setText}
        addText={addText}
      />
      <GoalList datas={list} removeItem={removeItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginHorizontal: 20,
  },
  dummyText: {
    padding: 16,
    borderWidth: 1,
  },
});

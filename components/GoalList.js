import { StyleSheet, FlatList, View, Text, Pressable } from "react-native";

const Divider = () => {
  return (
    <View
      style={{
        height: 1,
        backgroundColor: "#cccccc",
        paddingHorizontal: 20,
        marginVertical: 10,
      }}
    />
  );
};

const ListItem = ({ data, removeItem }) => {
  return (
    <Pressable onPress={() => removeItem(data.id)}>
      <View style={styles.listItem}>
        <Text style={styles.listItemText}>{data.text}</Text>
      </View>
    </Pressable>
  );
};

function GoalList({ datas, removeItem }) {
  return (
    <View style={styles.block}>
      <FlatList
        style={{ flex: 1 }}
        data={datas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem data={item} removeItem={removeItem} />
        )}
        ListHeaderComponent={() => <Divider />}
        ItemSeparatorComponent={() => <Divider />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
  listTitle: {
    marginVertical: 20,
  },
  listItem: {
    padding: 8,
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  listItemText: {
    color: "#ffffff",
    fontSize: 15,
  },
});

export default GoalList;

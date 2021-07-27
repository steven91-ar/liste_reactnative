import React from "react"
import {Text, View, Image, StyleSheet, TouchableOpacity} from "react-native"

const TaskTile = ({ id, title, completed, onChangeStatus, onDeleteTask }) => {
    return (
        <TouchableOpacity onPress={() => onChangeStatus(id)}>
        <View style={styles.container}>
        <View style={styles.subContainer}>
        <Image 
        style={styles.icon}
        source={
            completed
            ? require("../../../../assets/icon_check.png") 
            : require("../../../../assets/icon_circle.png")
        }
      />
      <Text 
      style={[styles.title, { color: completed ? "lightgrey" : "black"}]} 
      >
      {title}
      </Text>
      </View>
      <TouchableOpacity onPress={() => onDeleteTask(id)}>
          <Image
       style={styles.icon}
        source={require("../../../../assets/icon_delete.png")}
      />
      </TouchableOpacity>
      </View>
        </TouchableOpacity>
        );
    };

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        justifyContent: 'space-between', 
        alignItems: "center"
    },
    subContainer:{
        flexDirection: "row",
        // justifyContent: "flex-start",
        alignItems: "center"
    },
    title: {
        marginLeft: 30
    },
    icon: {
        width:30,
        height:30
    }
});

export default TaskTile;
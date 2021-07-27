import React, {useState} from "react"
import {TextInput, View, StyleSheet, Button} from "react-native"

const TaskForm = ({ onAddTask }) => {
    const [title, setTitle] = useState('');

    const _onChangeText = value => {
        setTitle(value);
    };

 const _onPressBtn = () => {
     if (title.length > 0) {
         onAddTask(title);
         setTitle("");
     }
 };

    return (
         <View style={style.container}>
         <View style={style.containerInput}>
         <TextInput value={title} onChangeText={_onChangeText} />
         </View>
        <Button onPress={_onPressBtn} title="Ajouter" color="#33FF36"/>
      </View>
    );
};

const style = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    containerInput: {  
        width: "75%",
        borderWidth: 1,
        borderColor: "black",
        borderRadius:4,
        paddingLeft: 7
        }
});

export default TaskForm;
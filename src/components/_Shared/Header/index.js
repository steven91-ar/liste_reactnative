import React from 'react'
import {Text, View, StyleSheet } from 'react-native';

const days = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mecredi",
    "Jeudi",
    "Vendredi",
    "Samedi"
];
const months = [
    "Janv",
    "Fev",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre"
];


export default function Header() {
    const date = new Date();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
            {days[date.getDay()] + 
            " " + 
            date.getDate()+ 
            " " + 
            months[date.getMonth()]}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
container: {
    marginTop:20,
    marginBottom:20
},
title: {
    fontSize: 25,
    fontWeight: "bold"
}
});
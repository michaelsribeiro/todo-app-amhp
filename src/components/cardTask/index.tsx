import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { Trash, Circle, CheckCircle } from "phosphor-react-native";

import { styles } from './styles';
import { State } from 'expo-router/build/fork/getPathFromState';

type Props = {
    item: string;
    removeTask: any;
    includeTaskDone: any;
    taskDone: string[];
}

const CardTask = ({ item, removeTask, includeTaskDone, taskDone }: Props) => {    
    const key = taskDone.filter(task => task === item)[0];

    return (
        <View 
            style={styles(key, item).containerCardTask}            
        >
            <TouchableOpacity 
                style={styles(key, item).btnCheck}
                onPress={() => item !== key ? includeTaskDone(item) : includeTaskDone(key)}
                >
                { item !== key ? (
                    <Circle size={20} color={'#4EA8DE'}/>
                ) : (
                    <CheckCircle size={20} color={'#8284FA'} weight="fill"/>
                )}
            </TouchableOpacity>
            <Text style={styles("", "").cardText}>{item}</Text>
            <TouchableOpacity 
                style={styles("", "").btnDelete}
                onPress={() => removeTask(item)}                
                >
                <Trash 
                size={20}
                color={"#808080"}
                />
            </TouchableOpacity>
        </View>
    )
}

export default CardTask;
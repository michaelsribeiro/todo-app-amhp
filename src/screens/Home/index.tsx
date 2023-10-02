import React, { useState } from 'react';
import { Stack, useRouter } from 'expo-router';
import { View, Text, SafeAreaView, Image, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';

import { styles } from './styles';

import CardTask from '../../components/cardTask';

type Task = {
    id: number;
    name: string;
}

let nextId = 0;

const Home = () => {
    const router = useRouter();
    const [isTextInputFocused, setTextInputFocused] = useState(false); 
    const [taskDone, setTaskDone] = useState<string[]>([])
    const [tasklist, setTaskList] = useState<string[]>([]);
    const [taskName, setTaskName] = useState('');    
    const [statusTask, setStatusTask] = useState(false);

    const addTask = () => {
        if (tasklist.includes(taskName)) return Alert.alert('Já existe uma tarefa com esta descrição.');
        if (taskName == "" || taskName == " ") return Alert.alert('O campo não pode ser vazio.');

        setTaskList(current => [...current, taskName]);
        setTaskName("");
    }

    const removeTask = (task: string) => {
        Alert.alert('Remover', 'Deseja remover a tarefa?', [
            {
                text: 'Sim',
                onPress: () => setTaskList(current => current.filter(item => item !== task))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
    }

    const addTaskDone = (taskName: string) => {
        setTaskDone(current => [...current, taskName]);
    }

    const removeTaskDone = (taskName: string) => {
        setTaskDone(current => current.filter(item => item !== taskName));
    }

    const includeTaskDone = (taskName: string) => {
        if (!taskDone.includes(taskName)){
            addTaskDone(taskName);
        }
        else {
            removeTaskDone(taskName);
        }
    }

    return (
        <SafeAreaView style={{flex: 1}}>            
            <View style={styles(false).containerSuperior}>
                <Image
                    source={require("../../../assets/images/Logo.png")}
                    style={styles(false).logo}
                />
            </View>
            <View style={styles(false).containerInferior}>       
                <View style={styles(false).containerInput}>
                    <TextInput 
                        style={styles(isTextInputFocused).textInput}                  
                        placeholder='Adicione uma nova tarefa'
                        placeholderTextColor={'#808080'}
                        cursorColor={'#F2F2F2'}
                        onFocus={() => setTextInputFocused(true)}
                        onSubmitEditing={() => setTextInputFocused(false)}
                        onEndEditing={() => setTextInputFocused(false)}
                        onChangeText={text => setTaskName(text)}
                        value={taskName}
                    />
                    <TouchableOpacity 
                        style={styles(false).btnAdd}
                        onPress={addTask}
                    >
                        <Image
                            source={require('../../../assets/images/Layer_2.png')}
                            resizeMode='contain' 
                        />
                    </TouchableOpacity>
                </View> 
                <View style={styles(false).containerTasks}>
                    <View style={styles(false).pending}>
                        <Text style={styles(false).textLeft}>Criadas</Text>
                        <Text style={styles(false).number}>{tasklist.length > 0 ? tasklist.length : 0}</Text>
                    </View>     
                    <View style={styles(false).done}>
                        <Text style={styles(false).textRight}>Concluídas</Text>
                        <Text style={styles(false).number}>{taskDone.length > 0 ? tasklist.length : 0}</Text>
                    </View>               
                </View>
                    <FlatList 
                        data={tasklist}
                        keyExtractor={item => item}
                        renderItem={({ item }) => (
                            <CardTask 
                                item={item} 
                                removeTask={removeTask}
                                includeTaskDone={includeTaskDone}
                                taskDone={taskDone}    
                            />
                        )}
                        contentContainerStyle={{ columnGap: 16 }}
                        showsVerticalScrollIndicator={false}
                        ListEmptyComponent={() => (
                            <View style={styles(false).emptyList}>
                                <Image
                                    style={styles(false).emptyImage}
                                    source={require("../../../assets/images/Clipboard.png")}
                                />
                                <Text style={styles(false).emptyTextUp}>Você ainda não tem tarefas cadastradas</Text>
                                <Text style={styles(false).emptyTextDown}>Crie tarefas e organize seus itens a fazer</Text>
                            </View>
                        )}
                    />              
                                     
            </View>           
        </SafeAreaView>
    )
}

export default Home;
import { StyleSheet } from "react-native";

export const styles = (isTextInputFocused: boolean) => StyleSheet.create({
    containerSuperior: {
      height: 173,
      width: '100%',
      padding: 16,
      backgroundColor: '#0D0D0D',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: 132,
    },
    containerInferior: {
      flex: 1,
      backgroundColor: '#1A1A1A',
      padding: 20,
      position: "relative",
    },
    containerInput: {
      width: '100%',
      flexDirection: 'row',
      gap: 5,
      position: 'absolute',
      top: -30,
      marginLeft: 20,
    },
    textInput: {
      backgroundColor: '#333',
      height: 56,
      flex: 1,
      color: '#F2F2F2',
      borderRadius: 6,
      padding: 16,
      fontSize: 16,  
      borderWidth: .8,
      borderColor: isTextInputFocused == true ? '#5E60CE' : '#262626',
    },
    btnAdd: {
      height: 56,
      width: 56,
      backgroundColor: '#1E6F9F',
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 16,
    },
    inputBorderColor: {
      borderColor: '#5E60CE'
    },
    containerTasks: {
      flexDirection: 'row',
      width: '100%',
      height: 56,
      marginTop: 15,
      alignItems: 'center',
      borderBottomWidth: .8,
      borderColor: '#333333'
    },
    pending: {
      flexDirection: 'row',
      flex:1,
      gap: 10,
    },
    done: {
      flexDirection: 'row',
      flex:1,
      justifyContent: 'flex-end',      
      gap: 10,
    },
    textLeft: {
      fontWeight: "bold",
      fontSize: 16,
      color: '#4EA8DE',
    },
    textRight: {
      fontWeight: "bold",
      fontSize: 16,      
      color: '#5E60CE'
    },
    number: {
      color: '#D9D9D9',
      fontWeight: 'bold',
      paddingHorizontal: 10,
      fontSize: 15,
      backgroundColor: '#333333',
      borderRadius: 10
    },
    emptyList: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 100,
    },
    emptyImage: {
      width: 60,
      height: 60,
      marginBottom: 20,
    },
    emptyTextUp: {
      fontSize: 17,
      fontWeight: 'bold',
      color: "#808080"
    },
    emptyTextDown: {
      fontSize: 17,
      color: "#808080"
    },
  });
  
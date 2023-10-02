import { StyleSheet } from "react-native";

export const styles = (key: string, item: string) => StyleSheet.create({
    containerCardTask: {
      minHeight: 64,
      width: '100%',
      padding: 16,
      backgroundColor: '#262626',
      justifyContent: 'center',
      borderRadius: 10,
      marginTop: 10,
      flexDirection: 'row',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: item === key ? '#262626' : '#333333'
    },
    cardText: {
        color: '#F2F2F2',        
        flex: 1,
        fontSize: 16,
        marginLeft: 10,
        textDecorationStyle: 'solid'
    },  
    btnDelete: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 5
    },
    btnDeleteImage: {
        width: 20,
        height: 20
    },
    btnCheck: {
        paddingVertical: 10,
    },
  });
  
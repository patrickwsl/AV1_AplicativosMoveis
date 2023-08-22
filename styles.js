import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
        padding:20,
      },

      titulo:{
        width:'100%',
        height:35,
        fontSize:20,
        marginBottom:20,
        textAlign:'center',
        color:'black',
        backgroundColor:'#29c2ff',
        borderRadius:20,
        justifyContent: 'center',
        fontWeight:'bold'
      },

      textInput:{
        width:300,
        height:40,
        backgroundColor:'#b8b8b8',
        borderRadius:20,
        paddingLeft:20,
        marginBottom:10
      },

      btnCadastro:{
        width:300,
        height:40,
        backgroundColor:'#29c2ff',
        borderRadius:20,
        justifyContent: 'center',
        marginBottom:10
      },

      containerLogo: {
        flex:2,
        backgroundColor:'#38a69d',
        justifyContent: 'center',
        alignItems: 'center'
      }
})

export default styles;
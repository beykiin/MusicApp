import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        padding:10,
        backgroundColor:'black',
        flexDirection:'row',
        gap:30,
        

    },

    image:{
        width:90,
        height:90,
        borderRadius:45,

        
        
        
    },
    innerContainer:{
        justifyContent:'center',
        flex:1,
        flexDirection: 'column' 
    },
    infoContainer:{
        flexDirection:'column',
        gap:5,
        marginTop:3,
        flex:0.7
        
        
        

    },

    title:{
        color:'aliceblue',
        fontWeight: 'bold' , 
        fontSize:15,
    },
    album:{
        color:'grey',
        fontSize:13
        // fontWeight: 'bold' ,
    },
    artist:{
        color:'grey',
        fontSize:13
        // fontWeight: 'bold' , 
    },
    year:{
        color:'grey',
        fontSize:13,
        // fontWeight: 'bold',
    },
    imgCont:{
        width:95,
        height:95,
        borderRadius:52.5,
        borderWidth:3,
        borderColor:'aliceblue',
        shadowColor: "azure",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 15.00,

        elevation: 20,
    },
    soldout_container:{
        borderWidth:0.8,
        borderColor:'darkred',
        padding:1,
        borderRadius:5,
        
        
    },
    soldout_text:{
        color: 'darkred',
        fontWeight: 'bold',
        textAlign:"center"
        
        
    },
    content_container:{
        flexDirection:'column',
        flex:0.7,
        marginTop:'auto'
    },
    songContent:{
        flexDirection:'row',
        // alignItems:'flex-end',
    }
})
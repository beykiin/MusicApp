import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./SongCard.styles"


const SongCard = (props) =>{
    return(
        <View style={styles.container}> 
            <View style={styles.imgCont}>
                <Image style={styles.image} source={{uri: props.song.imageUrl}} src={props.song.imageUrl}/>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>
                    {props.song.title}
                </Text>
                    <View style={styles.infoContainer}>
                            <View style={styles.songContent}>
                                <Text style={styles.artist}>
                                    {props.song.artist}
                                </Text>
                                <Text style={styles.year}>
                                    – {props.song.year}
                                </Text>
                            </View>
                            <View>
                        <Text style={styles.album}>
                            {props.song.album}
                        </Text>
                    </View>
                    </View>
                    
            </View>
            <View style={styles.content_container}>  
                {props.song.isSoldOut && (
                    <View style={styles.soldout_container}>
                        <Text style={styles.soldout_text}>SOLD OUT</Text>
                    </View>
                )}
            </View>
        </View>
    )
}

export default SongCard
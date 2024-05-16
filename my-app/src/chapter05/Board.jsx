import React from "react";

const styles = {
    wrapper : {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16
    },
    imageContainer: {},
    image:{
        width: 100,
        height: 100,
        borderRadius: 25
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    titleText:{
        color: "black",
        fontSize: 20,
        fontWeight: "bold"
    },
    nameText:{
        color: "black",
        fontSize: 16,
        fontWeight: "bold"
    },
    commentText:{
        color: "black",
        fontSize: 16
    },
    timeText:{
        color: "blue",
        fontSize: 12
    }
    
};
function Board(props){
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                style={styles.image} />
            </div>
            <div style={styles.contentContainer}>
                <span style={styles.titleText}>{props.title}</span>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
                <span style={styles.timeText}>{new Date().toLocaleString()}</span>

            </div>
        </div>
    );
}

export default Board;
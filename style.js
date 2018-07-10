import { StyleSheet } from "react-native";

let style = StyleSheet.create({
    dateTouch: {
        width: 142
    },
    dateTouchBody: {
        flexDirection: "row",
        height: 40,
        alignItems: "center",
        justifyContent: "center"
    },
    dateIcon: {
        width: 32,
        height: 32,
        marginLeft: 5,
        marginRight: 5
    },
    dateInput: {
        marginTop: 5,
        height: 38,
        width: "100%",
        backgroundColor: "#F7F6F4",
        borderColor: "#CDCDCD",
        borderWidth: StyleSheet.hairlineWidth,
        justifyContent: "center"
    },
    dateText: {
        marginLeft: 10,
        color: "#333",
        fontFamily: "Lora"
    },
    placeholderText: {
        color: "#c9c9c9"
    },
    datePickerMask: {
        flex: 1,
        alignItems: "flex-end",
        flexDirection: "row",
        backgroundColor: "#00000077"
    },
    datePickerCon: {
        backgroundColor: "#fff",
        height: 0,
        overflow: "hidden"
    },
    btnText: {
        position: "absolute",
        top: 0,
        height: 42,
        paddingHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    btnTextText: {
        fontSize: 16,
        fontFamily: "Lora",
        color: "#F0AC8F"
    },
    btnTextCancel: {
        color: "#666"
    },
    btnCancel: {
        left: 0
    },
    btnConfirm: {
        right: 0
    },
    datePicker: {
        marginTop: 42,
        borderTopColor: "#ccc",
        borderTopWidth: 1
    },
    disabled: {
        backgroundColor: "#eee"
    }
});

export default style;

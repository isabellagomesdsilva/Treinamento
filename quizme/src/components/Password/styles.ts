import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputComponent: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  inputArea: {
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    width: '76%',
    height: 55,
    borderRadius: 9,
    backgroundColor: '#F1F6FB',
    fontFamily: 'YanoneKaffeesatz-Regular',
    fontSize: 20,
    paddingLeft: '5%',
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 15,
    color: "#5B5B5F",
    alignSelf: "flex-start",
    fontFamily: "Montserrat-Regular",
  },
  error: {
    color: "#DE262F",
    fontSize: 15,
    marginTop: "1%",
    fontFamily: "Montserrat-Medium",
  },
});

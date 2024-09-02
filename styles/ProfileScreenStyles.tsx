import { StyleSheet } from "react-native";

const ProfileScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4b6454",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  profileInfo: {
    marginTop: 20,
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    color: "#c2d4c2",
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default ProfileScreenStyles;

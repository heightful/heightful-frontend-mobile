import { StyleSheet } from "react-native";

const SettingsScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4b6454", // Earthy green background
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  logoutButton: {
    backgroundColor: "#ff6b6b", // Bright red button
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  logoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default SettingsScreenStyles;

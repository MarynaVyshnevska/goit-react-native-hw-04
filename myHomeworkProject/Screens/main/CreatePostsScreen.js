import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const CreatePostsScreen = ({ navigation }) => {
  const [postTitle, setPostTitle] = useState("");
  const [postLocation, setPostLocation] = useState("");
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const keyboardHidden = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const onCreatePost = () => {
    console.log("Post Title", postTitle);
    console.log("Post Location", postLocation);
    setPostTitle("");
    setPostTitle("");
    navigation.navigate("PostsScreen");
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHidden}>
      <View style={styles.container}>
        <View style={styles.pictureContainer}>
          <View style={styles.pictureWindow}>
            <MaterialIcons name="photo-camera" size={24} color="#BDBDBD" />
          </View>
        </View>
        <Text style={styles.loadText}>Завантажте фото</Text>
        <View>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View style={{ marginBottom: isShowKeyboard ? 60 : 0 }}>
              <TextInput
                style={{ ...styles.input, marginTop: 48 }}
                onFocus={() => setIsShowKeyboard(true)}
                value={postTitle}
                onChangeText={(value) => setPostTitle(value)}
                placeholder="Назва"
                placeholderTextColor="#BDBDBD"
              />
              <View style={styles.location}>
                <TextInput
                  style={{ ...styles.input, marginTop: 32, paddingLeft: 24 }}
                  onFocus={() => setIsShowKeyboard(true)}
                  value={postLocation}
                  onChangeText={(value) => setPostLocation(value)}
                  placeholder="Місцевість"
                  placeholderTextColor="#BDBDBD"
                />
                <SimpleLineIcons
                  style={styles.locationIcon}
                  name="location-pin"
                  size={18}
                  color="#BDBDBD"
                />
              </View>
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity
            title={"Опублікувати"}
            style={[
              styles.btn,
              {
                backgroundColor:
                  postLocation && postTitle ? "#FF6C00 " : "#F6F6F6",
              },
            ]}
            activeOpacity={0.5}
            onPress={onCreatePost}
          >
            <Text
              style={[
                styles.textBtn,
                { color: postLocation && postTitle ? "#FFFFFF" : "#BDBDBD" },
              ]}
            >
              Опублікувати
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 32,
    backgroundColor: "#ffffff",
  },
  pictureContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 240,
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
  },
  pictureWindow: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  loadText: {
    fontFamily: "RobotoRegular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#BDBDBD",
    marginTop: 8,
  },
  input: {
    fontFamily: "RobotoRegular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
    paddingBottom: 16,
    borderColor: "transparent",
    borderBottomColor: "#E8E8E8",
    borderWidth: 1,
  },
  location: {
    position: "relative",
  },
  locationIcon: {
    position: "absolute",
    left: 0,
    top: 32,
  },
  btn: {
    width: "100%",
    borderRadius: 100,
    height: 51,
    marginTop: 32,
  },
  textBtn: {
    fontFamily: "RobotoRegular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textAlign: "center",
    paddingTop: 16,
  },
});

import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

export const Post = ({ data }) => {
  console.log(data);
  const { title, image, description, comments, likes, location } = data;
    const { country, region } = location;
    const fullLocation = `${region}, ${country}`;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.postTitle}>{title}</Text>
      <View style={styles.postInfo}>
        <View style={styles.info}>
          <TouchableOpacity style={styles.commentIcon}>
            <FontAwesome name="comment" size={18} color="#FF6C00" />
          </TouchableOpacity>
          <Text style={styles.text}>{comments}</Text>
        </View>
        {/* <View style={{ ...styles.info, marginLeft: 27 }}>
          <TouchableOpacity>
            <AntDesign name="like2" size={18} color="#FF6C00" />
          </TouchableOpacity>
          <Text style={styles.text}>{likes}</Text>
        </View> */}
        <View style={styles.location}>
          <TouchableOpacity>
            <SimpleLineIcons name="location-pin" size={18} color="#BDBDBD" />
          </TouchableOpacity>
          <Text style={styles.text}>{fullLocation}</Text>
        </View>
      </View>
    </View>
  );
};

export const PostCountry = ({ data }) => {
  console.log(data);
  const { title, image, description, comments, likes, location } = data;
    const { country, region } = location;
    // const fullLocation = `${region}, ${country}`;

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.postTitle}>{title}</Text>
      <View style={styles.postInfo}>
        <View style={styles.info}>
          <TouchableOpacity style={styles.commentIcon}>
            <FontAwesome name="comment" size={18} color="#FF6C00" />
          </TouchableOpacity>
          <Text style={styles.text}>{comments}</Text>
        </View>
        <View style={{ ...styles.info, marginLeft: 27 }}>
          <TouchableOpacity>
            <AntDesign name="like2" size={18} color="#FF6C00" />
          </TouchableOpacity>
          <Text style={styles.text}>{likes}</Text>
        </View>
        <View style={styles.location}>
          <TouchableOpacity>
            <SimpleLineIcons name="location-pin" size={18} color="#BDBDBD" />
          </TouchableOpacity>
          <Text style={styles.text}>{country}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 32,
  },
  image: {
    width: "100%",
    borderRadius: 8,
    height: 240,
  },
  postTitle: {
    fontFamily: "RobotoRegular",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginTop: 8,
  },
  postInfo: {
    // display: "flex",
    position: "relative",
    marginTop: 11,
    flexDirection: "row",
  },
  info: {
    flexDirection: "row",
  },
  text: {
    fontFamily: "RobotoRegular",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 18.75,
    color: "#212121",
    marginLeft: 9,
  },
  location: {
    position: "absolute",
    right: 0,
    flexDirection: "row",
  },
  commentIcon: {
    transform: [{ scaleX: -1 }],
  },
});

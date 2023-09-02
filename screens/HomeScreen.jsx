import React from "react";
import { FlatList } from "react-native";
import {
  RefreshControl,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import PostView from "../components/Post";
import axios from "axios";
import Loading from "../components/Loading";

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const fetchPosts = () => {
    setLoading(true);
    axios
      .get("https://6490ad001e6aa71680cba4bb.mockapi.io/sneakers")
      .then(({ data }) => {
        setPosts(data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
        alert(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  React.useEffect(fetchPosts, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <FlatList
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={fetchPosts} />
      }
      data={posts}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.navigate("FullItem", {id: item.id, title: item.title, price: item.price, })}>
          <PostView
            title={item.title}
            price={item.price}
            imgUrl={item.imgUrl}
          />
        </TouchableOpacity>
      )}
    />
  );
};

export default HomeScreen;

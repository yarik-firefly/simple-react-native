import React from "react";
import { View } from "react-native";
import { styled } from "styled-components/native";
import { PostImage } from "../components/Post";
import axios from "axios";
import Loading from "../components/Loading";

const FullItemScreen = ({ route }) => {
  const { id, title, price } = route.params;
  const PostTitle = styled.Text`
    font-size: 25px;
    font-weight: 700;
    text-align: center;
  `;

  const PostDescription = styled.Text`
    font-size: 15px;
    font-weight: 500;
    justify-content: center;
  `;

  const PostPrice = styled.Text`
    font-size: 15px;
    font-weight: 800;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
  `;
  const [post, setPost] = React.useState();
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    axios
      .get(`https://6490ad001e6aa71680cba4bb.mockapi.io/sneakers/${id}`)
      .then(({ data }) => {
        setPost(data);
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
        alert(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <View style={{ padding: 20 }}>
      <PostImage
        source={{
          uri: post.imgUrl,
        }}
        style={{
          width: "100%",
          height: 350,
          borderRadius: 20,
          marginBottom: 20,
        }}
      />
      <PostTitle>{post.title}</PostTitle>
      <PostPrice>{post.price}UAH</PostPrice>

      <PostDescription>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
        temporibus quibusdam ullam quas dolorum illo assumenda, commodi harum
        explicabo sapiente magni recusandae at. Enim, eveniet voluptas
        consectetur reprehenderit exercitationem ipsa neque blanditiis
        reiciendis quasi odio maiores quaerat amet sapiente corporis.
      </PostDescription>
    </View>
  );
};

export default FullItemScreen;

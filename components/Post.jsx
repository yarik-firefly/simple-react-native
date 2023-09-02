import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native-web";
import { FlatList } from "react-native";
export const PostImage = styled.Image`
  width: 115px;
  height: 100px;
  margin-right: 12px;
`;

const PostView = ({ title, price, imgUrl }) => {
  const Post = styled.View`
    margin-top: 30px;
    padding: 15px;
    flex-direction: row;
    border-bottom-width: 1px;
    border-bottom-color: rgba(0, 0, 0, 0.1);
    border-bottom-style: solid;
  `;

  const PostTitle = styled.Text`
    font-size: 16px;
    font-weight: 700;
  `;
  const PostDetails = styled.View`
    font-size: 15px;
    justify-content: center;
    flex: 1;
  `;
  const PostDate = styled.Text`
    font-size: 15px;
  `;
  return (
    <Post>
      <PostImage
        source={{
          uri: imgUrl,
        }}
      />
      <PostDetails>
        <PostTitle>{title}</PostTitle>
        {/* <Text>12</Text> */}
        <PostDate>{price} UAH</PostDate>
      </PostDetails>
    </Post>
  );
};

export default PostView;

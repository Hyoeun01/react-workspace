import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';
import MainPage from './component/page/MainPage';
import { useState } from 'react';

const MainTitleText = styled.p`
  font-size : 24px;
  font-weight : bold;
  text-align : center; `;


const initialPosts = [
  {
    id : 0,
    isDone : false,
    title : "리액트 과제 초기 데이터 제목 1",
    content : "리액트 과제 초기 데이터 내용 1",
    createdDate : new Date().getTime(),
  },
  {
    id : 1,
    isDone : false,
    title : "리액트 과제 초기 데이터 제목 2",
    content : "리액트 과제 초기 데이터 내용 2",
    createdDate : new Date().getTime(),
  },
  {
    id : 2,
    isDone : false,
    title : "리액트 과제 초기 데이터 제목 3",
    content : "리액트 과제 초기 데이터 내용 3",
    "comments": [
      {
        "id": 11,
        "content": "댓글 달기 테스트 1"
      },
      {
        "id": 12,
        "content": "댓글 달기 테스트 2"
      },
    ],
    createdDate : new Date().getTime(),
  },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);

  const addPost = (title, content) => {
    const newPost = {
      id : posts.length,
      title,
      content,
      createdDate : new Date().getTime(),
      comments : [],
    };
    setPosts([...posts, newPost]);
  };

  const addComment = (postId, commentContent) => {
    setPosts(posts.map( post => post.id === postId
      ? { ...post, comments : [...( post.comments || [] ), { id : Date.now(), content : commentContent }] }
      : post
    ));
  };

  const updatePost = (postId, updatedTitle, updatedContent) => {
    setPosts(posts.map(post =>
      post.id === postId
        ? { ...post, title : updatedTitle, content : updatedContent }
        : post
    ));
  };
  const deletePost = (postId) => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  return (
    <BrowserRouter>
      <MainTitleText> 소플의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element = {<MainPage posts = {posts}/>} />
        <Route path="post-write" element = {<PostWritePage addPost = {addPost}/>} />
        <Route path="post/:postId"
          element = {<PostViewPage posts = {posts}
            addComment = {addComment}
            updatePost = {updatePost}
            deletePost = {deletePost} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

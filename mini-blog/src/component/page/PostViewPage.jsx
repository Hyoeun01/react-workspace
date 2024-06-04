import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import CommentList from "../list/CommentList";
import TextInput from "../ui/TextInput";
import Button from "../ui/Button";

const Wrapper = styled.div`
    padding : 16px;
    width : calc(100% - 32px);
    display : flex;
    flex-direction : column;
    align-items : center;
    justify-content : center;
`;

const Container = styled.div`
    width : 100%;
    max-width : 720px;

    :not(:last-child){
        margin-bottom : 16px;
    }
`;

const PostContainer = styled.div`
    padding : 8px 16px;
    border : 1px solid grey;
    border-radius : 8px;
`;

const TitleText = styled.p`
    font-size : 28px;
    font-weight : 500;
`;

const ContentText = styled.p`
    font-size : 16px;
    font-weight : 32;
    white-space : pre-wrap;
`;

const CommentLabel = styled.p`
    font-size : 16px;
    font-weight : 500;
`;

function PostViewPage({ posts, addComment, updatePost, deletePost }) {
    const navigate = useNavigate();
    const { postId } = useParams();
    const post = posts.find((item) => item.id === parseInt(postId));

    const [comment, setComment] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(post?.title || "");
    const [updatedContent, setUpdatedContent] = useState(post?.content || "");

    const handleComment = () => {
        if ( comment.trim() === "" ) {
            alert("댓글을 입력하세요.");
        } else {
            addComment(post.id, comment);
            setComment("");
        }
    };

    const handleUpdate = () => {
        if ( updatedTitle.trim() === "" || updatedContent.trim() === "" ) {
            alert("제목과 내용을 입력하세요.");
        } else {
            updatePost(post.id, updatedTitle, updatedContent);
            setIsEditing(false);
        }
    };

    const handleDelete = () => {
        deletePost(post.id);
        navigate("/");
    };

    return (
        <Wrapper>
            <Container>
                <Button title = "뒤로가기" onClick = { () => navigate("/") } />
                {isEditing ? (
                    <PostContainer>
                        <TextInput height = {20} value = {updatedTitle} onChange = { (e) => setUpdatedTitle(e.target.value) } />
                        <TextInput height = {240} value = {updatedContent} onChange = { (e) => setUpdatedContent(e.target.value) } />
                        <Button title = "저장하기" onClick = {handleUpdate} />
                    </PostContainer>
                ) : (
                    <PostContainer>
                        <TitleText>{post?.title}</TitleText>
                        <ContentText>{post?.content}</ContentText>
                        <Button title = "수정" onClick = { () => setIsEditing(true) } />
                        <Button title = "삭제" onClick = {handleDelete} />
                    </PostContainer>
                )}
                <CommentLabel>댓글</CommentLabel>
                <CommentList comments = {post?.comments || []} />
                <TextInput 
                    height = {40} 
                    value = {comment} 
                    onChange = { (event) => setComment(event.target.value) }
                />
                <Button title = "댓글 작성하기" onClick = {handleComment} />
            </Container>
        </Wrapper>
    );
}

export default PostViewPage;

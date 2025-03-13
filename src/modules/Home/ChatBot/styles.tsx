import styled from "styled-components";

export const ChatContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f4f4f4;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.1) 3px -5px 20px 5px;
`;

export const ChatMain = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ChatHeader = styled.div`
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

export const ChatWindowStyled = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  flex-grow: 1;
  overflow-y: auto;
  background: white;
  border-left: 2px solid #ddd;
  padding: 15px;
  
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #888;
  }
`;

export const Message = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 8px;
  max-width: 80%;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  white-space: pre-wrap;
  font-size: 18px;

  &.user {
    align-self: flex-end;
    background-color: #e1e1e1;
    color: white;
    text-align: right;
    margin-left: auto;
  }

  &.assistant {
    align-self: flex-start;
    color: black;
    text-align: left;
    margin-right: auto;
  }

  &.pending {
    align-self: flex-start;
    background: linear-gradient(270deg, #e1e1e1, #b3afaf, #e1e1e1);
    background-size: 400% 400%;
    animation: waveAnimation 3s ease infinite;
    color: black;
    text-align: left;
    margin-right: auto;
    padding: 10px;
    border-radius: 8px;
  }
`;

import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @keyframes waveAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

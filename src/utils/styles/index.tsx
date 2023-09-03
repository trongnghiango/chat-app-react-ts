import styled from 'styled-components'
import { PageProps } from './styleTypes';

const DARK = "#131313"
export const SIZEBAR_WIDTH = 400;

export const InputField = styled.input` 
  font-family: 'Inter';
  background-color: inherit;
  outline: none;
  border: none;
  color: white;
  font-size: 18px;
  width: 100% ;
  box-sizing: border-box;
  padding: 0;
`;


export const InputContainer = styled.div`
  background-color: ${DARK};
  padding: 12px 16px;
  border-radius: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const InputLabel = styled.label`
  display: block;
  font-size: 14px;
  color: #8f8f8f;
  margin: 4px 0;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #2b09ff;
  color: #fff;
  outline: none;
  border: none;
  font-family: 'Inter';
  font-size: 18px;
  border-radius: 10px;
  padding: 20px 0;
  font-weight: 500;
  transition: 300ms background-color ease;
  transition: 500ms border ease;
  border: 2px solid #2b09ff;
  box-sizing: border-box;
  &:hover{
    cursor: pointer;
    background-color: #3415ff;
  }

  &:active{
    background-color: #3a1cff;
  }

  &:focus {
    background-color: #4f24ff;
    border: 2px solid #fff;
  }
`;

export const Page = styled.div<PageProps>`
  height: 100%;
  background-color: #1a1a1a;
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

export const ConversationSidebarStyle = styled.aside`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${SIZEBAR_WIDTH}px;
  background-color: #1a1a1a;
  box-sizing: border-box;
  border: 1px solid #5454543d;
  overflow-y: scroll;
  &::-webkit-scrollbar{
    /* display: none; */
    width: 10px;
    height: 5px;
    border-radius: 50%;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #2d2d2d;
  }
`;

export const ConversationSidebarHeader = styled.header`
position: fixed;
top: 0;
left: 0;
width: ${SIZEBAR_WIDTH}px;
box-sizing: border-box;
display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    background-color: #151515;
    border-bottom: 1px solid #5454543d;
    padding: 0 18px;
    & h1 {
      font-weight: 500;
    }
`;

export const ConversationChannelPageStyle = styled.div`
  height: 100%;
  margin-left: ${SIZEBAR_WIDTH}px;

`;

export const ConversationSidebarContainer = styled.div` // wrapper list items name ...
  /* padding: 0 32px; */
  margin-top: 100px;
`;

export const ConversationSidebarItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 16px 32px;
  box-sizing: border-box;
  border-bottom: 1px solid #ffffff2b;
`;
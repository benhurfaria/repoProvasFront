import styled from "styled-components";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 28px;
  text-align: center;
  color: #ffffff;
  margin-top: 53px;
`;

const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  border-radius: 10px;
  background-color: #8c97ea;
  color: #ffffff;
  font-weight: bold;
  margin-top: ${(props) => props.margin};
  font-size: ${(props) => props.size};
  :focus {
    outline: transparent;
  }
`;

export{
    Main, 
    Title,
    Button,
}
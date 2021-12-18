import styled from 'styled-components';

const Input = styled.input`
  background: #ffffff;
  border-radius: 10px;
  width: 50%;
  height: 50px;
  margin-bottom: 10px;
  margin-top: ${(props) => props.margin};
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  color: #000000;
  border: 1px solid #604848;
  padding-left: 15px;
  :focus {
    outline: transparent;
  }
  input::placeholder{
    color: #604848;
  }
`;

export {
    Input,
}
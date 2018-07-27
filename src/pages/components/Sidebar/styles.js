import styled from "styled-components";

export const Container = styled.div`
  background: #FFF;
  display: block;
  width: 320px;
  padding: 20px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  box-shadow: 3px 3px 20px #ddd;
  z-index: 1;
`;

export const Form = styled.form`

  margin-top: 20px;
  display: flex;

  input{
    flex: 1;
    height: 42px;
    padding: 0 20px;
    background: #EEE;
    bottom: 0;
    color: #444;
    font-size: 18px;
    border-radius: 4px;

    border: ${props => (props.withError ? '2px solid #F00' : 0)}
  }

  button{
    width: 50px;
    height: 42px;
    padding: 10px;
    margin-left: 10px;
    background: #59EA9A;
    color: #FFF;
    border: 0;
    font-size: 20px;
    font-weight: bold;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
      background: #52D89F;
    }
  }
`;

export const ListContainer = styled.div`
  display: block;
  margin-top: 30px;
`;

export const RepositoryItem = styled.a`
  display: flex;
  padding: 10px;
  cursor: pointer;

  img {
    width: 45px;
    height: 45px;
    display: block;
    margin-top: 5px;
  }

  strong {
    font-weight: bold;
    display: block
  }

  small{
    display: block;
    font-weight: 200;
    color: #666;
  }

  i{
    right: 40px;
    position: absolute;
    margin-top: 15px;
    cursor: pointer;
    color: #666;

  }
`;

export const RepositoryInfo = styled.div`
  display: block;
  padding: 10px 10px 10px 15px;
`;

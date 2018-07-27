import styled from "styled-components";

export const Container = styled.div`
  background: #FFF;
  display: flex;
  width: 100%;
  padding: 20px;
  height: 100px;
  position: absolute;
  top: 0;
  left: 320px;
  box-shadow: 3px 3px 20px #ddd;
  z-index: 1;
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

export const HalfBox = styled.div`
  width: 50%;
  display: flex;
`;

export const Filter = styled.select`
  height: 42px;
  border: 1px solid #DDD;
  width: 150px;
  padding: 10px;
  margin: auto;
  margin-left: 25%;
`;


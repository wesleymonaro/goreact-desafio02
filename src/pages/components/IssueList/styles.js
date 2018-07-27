import styled from "styled-components";

export const Container = styled.div`
  background: #F5F5F5;
  display: flex;
  padding: 30px;
  position: fixed;
  min-width: 200px;
  top: 100px;
  left: 320px;
  height: 100%;
  flex-wrap: wrap;
`;

export const IssueItem = styled.div`
  display: flex;
  padding: 10px;
  min-width: 31%;
  background: #FFF;
  height: 115px;
  padding: 20px;
  margin: 10px;
  border-radius: 5px;
  box-shadow: 3px 3px 10px #ddd;

  img {
    flex: 1;
    max-width: 64px;
    max-height: 64px;
    display: block;
    margin-top: 5px;
    border-radius: 32px;
  }

  strong {
    font-weight: bold;
    display: block;
    font-size: 14px;
  }

  small {
    display: block;
    font-weight: 200;
    color: #666;
  }

  button{
    background: #B286D1;
    padding: 5px;
    cursor: pointer;

    strong {
      color: #FFF;
      font-size: 12px;
      font-weight: normal;
      padding-right: 5px;
      i {
        color: #FFF;
        margin-right: 5px;
        margin-left: 5px;
      }
    }
  }
`;

export const IssueInfo = styled.div`
  display: block;
  padding: 10px 10px 10px 15px;
  line-height: 18px;
  width: 100%;
  flex: 4;
`;

export const LoadingContainer = styled.div`
  width: 100%;
  text-align: center;
`;

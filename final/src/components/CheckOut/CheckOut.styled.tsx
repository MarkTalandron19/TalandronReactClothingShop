import styled from "styled-components";

type ItemProps = {
  background: string;
};

export const Title = styled.p`
  font-weight: bold;
  font-size: 170px;
  margin-top: 20px;
`;

export const ItemWrapper = styled.div<ItemProps>`
  display: grid;
  align-items: flex-end;
  width: 240px;
  height: 340px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(52, 53, 99, 0.2), 0 1px 3px rgba(0, 0, 0, 0.05);
  background: ${(props) =>
    props.background && `url(${props.background}) center no-repeat`};
  background-size: 300px;
  overflow: hidden;
  position: relative;
`;

export const CheckOutTable = styled.table`
  border: 1px solid #bb7250;
  border-collapse: collapse;
`;

export const CheckOutHeader = styled.th`
  height: 50px;
  width: 160px;
  font-size: 20px;
  text-align: center;
  vertical-align: middle;
  background-color: #ccffff;
`;

export const Cell = styled.td`
  text-align: center;
  padding: 50px;

  p {
    font-weight: bold;
    font-size: 19px;
    margin: 0;
  }
`;

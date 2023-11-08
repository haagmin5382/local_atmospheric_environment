import styled from "styled-components";

export const HomeContainer = styled.div`
  @media (min-width: 800px) {
    display: grid;
    gap: 16px; // 그리드 아이템 간의 간격 설정
    grid-template-columns: repeat(2, 1fr);
  }
`;

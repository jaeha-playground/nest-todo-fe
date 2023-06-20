import styled from '@emotion/styled';

export const Container = styled.div`
  /* border: 1px solid; */
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 100%;
  z-index: 101;
  box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.1);
  align-items: center;
  padding: 16px 20px;

  /* background-color: ${({ theme }) => theme.backgroundColor}; */
  backdrop-filter: ${({ theme }) => theme.backdropFilter};
`;

import styled from '@emotion/styled';

export const Container = styled.div`
  border: 1px solid;

  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  border: 1px solid;

  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const MainWrapper = styled.main`
  border: 1px solid;

  margin-top: 100px;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h2 {
    margin-bottom: 30px;
  }

  & form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

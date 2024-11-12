import styled, {keyframes} from 'styled-components';
const bounce = keyframes`
  0%{
    transform: translateY(0);
  }
    50%{
        transform: translateY(-10px);
    }
    100%{
        transform: translateY(0);
    }
`;

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${bounce} 1s infinite;
`
export const Loading = styled.img`
    width: 200px;
    height: 200px;
`

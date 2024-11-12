import styled, {keyframes} from 'styled-components';
const bounce = keyframes`
  0%{
    transform: translateY(0);
  }
    50%{
        transform: translateY(-20px);
    }
    100%{
        transform: translateY(0);
    }
`;
export const container = styled.div`
    width: 100%;
    display: flex;
    height: 80vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const Box = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    animation: ${bounce} 1.5s infinite;
`
export const Loading = styled.img`
    width: 200px;
    height: 200px;
`

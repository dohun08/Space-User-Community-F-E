import styled from "styled-components";

export const pageNum = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
`
interface PageNumProps {
    $active?: boolean;
}
export const arrow = styled.img<PageNumProps>`
    cursor: pointer;
    padding: 0 10px;
    display: ${(props)=> props.$active ? 'block' : 'none'};
`
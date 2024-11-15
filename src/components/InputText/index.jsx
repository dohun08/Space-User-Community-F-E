import styled from "styled-components";

export default function InputText({type, borderBottom, placeholder, value, width, height, padding, borderRadius, onchange}) {

    return (
        <Input onChange={(e)=>onchange(e.target.value)} as={type} placeholder={placeholder} type={type} value={value} borderBottom={borderBottom} width={width} height={height} padding={padding} borderRadius={borderRadius}/>
    );
}

export const Input = styled.input`
    resize: none;
    border-radius: ${({borderRadius}) => borderRadius||"5px"};
    border: none;
    ${({ borderBottom }) => borderBottom? "border-bottom: 1px solid #DFDFDF":"border: 1px solid #DFDFDF" || "border: 1px solid #DFDFDF"};
    outline: none;
    padding: ${({padding})=> padding||"15px"};
    box-sizing: border-box;
    min-height: ${({ height }) => height||"unset"};
    width: ${({ width }) => width || "100%"};
    text-align: start;
    flex-grow: 1;
`
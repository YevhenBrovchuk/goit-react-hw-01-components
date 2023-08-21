import styled from 'styled-components';


export const Span = styled.span`
border-radius: 50px;
width: 20px;
height: 20px;  
background-color: ${props => {
    if (props.isOnline === true) {
        return "green";
    }
    else {
        return "red";
    }
}};
`



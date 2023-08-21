import styled from 'styled-components';


const getRandomColor = props=> {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

export const Ul = styled.ul`
display: flex;
list-style: none;
  margin: 0;
  padding: 0;
`

export const Section = styled.section`
background: white;
display: flex;
    flex-direction: column;
    align-items: center;
`

export const Li = styled.li`
padding: 30px;
background: ${getRandomColor};
display: flex;
    align-items: center;
    flex-direction: column;
`
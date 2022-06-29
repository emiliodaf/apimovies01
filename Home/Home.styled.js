import styled from 'styled-components'

export const Container = styled.div `

h1 {

    text-align: center;
    margin: 3rem 0;    
}


`;

export const MovieList = styled.ul `

list-style: none;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
column-gap: 3rem;
row-gap: 4rem;


`;

export const Movie = styled.li `

display: flex;
flex-direction: column;
align-items: center;

img {

width: 300px;
border-radius: 1rem;
margin-bottom: 2rem;
}


span {

font-weight: bold;
font-size: 1.5rem;
}

a {
transition: 1s
;
}

a:hover {

transform: scale(1.1);
z-index: 2;

}

`;

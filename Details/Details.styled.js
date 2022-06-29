import styled from 'styled-components'

export const Container = styled.div `


h1 {
    margin: 3rem 0;
}

.movie {
    position: relative;
    display: flex;
    align-items: flex-start; 
 
}

img {

    width: 450px;
    border-radius: 1rem;
    margin-left: 150px;
    margin-top: 20px;

}

.details {
    
    position: absolute;
    top: 15%;
    left:50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 10rem;
    max-width: 50%;
}

button {
    background-color: blue;
    border: solid 3px #fff ;
    cursor: pointer;
    border-radius: 5px;
    color: white;
    padding: 1rem 2rem;
    margin-top: 1rem;
    font-size: 1.2rem;
}

button:hover {
        background: #ff0000;  
    }

span {
    line-height: 130%;
    margin-bottom: 2rem;
    font-size: 110%;

    }

.release_date {
        opacity: 0.5;
    }


`
;


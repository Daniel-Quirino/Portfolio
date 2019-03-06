import styled from 'styled-components';

export const PresentationStyle = styled.h1`

    color: white;

    .wrapper {
        display: grid;

        grid-template-columns: repeat(9, 1fr);
    }

    .resume {   
        grid-column-start: 3; 
        grid-column-end: 8;   

        justify-self: center;
        align-self: center;

        padding: 120px 0px 0px 0px;

    }



    h1, h3 {
        text-align: center;
        font-family: 'opensans-bold', sans-serif;
        font-weight: normal;
    }

    h1 {
        font: 100px/1.1em 'opensans-bold', sans-serif;
        color: #fff;
        letter-spacing: -2px;
        margin: 0 auto 18px auto;
        text-shadow: 0px 1px 3px rgba(0, 0, 0, .8);

        margin: 10px 10px 0px 10px;
    }

    h3 {
        font: 23px/1.9em 'librebaskerville-regular', serif;
        color: #A8A8A8;
        text-shadow: 0px 1px 2px rgba(0, 0, 0, .5);
    }

    span, a {
        color: #fff;
        text-decoration:none; 
    }

    hr {
        width: 60%;
        margin: 18px auto 24px auto;
        border-color: #2F2D2E;
        border-color: rgba(150, 150, 150, .1);
    }

    .social {
        grid-column-start: 4; 
        grid-column-end: 7; 

        justify-self: center;
        align-self: center;

        font-size: 30px;
        text-shadow: 0px 1px 2px rgba(0, 0, 0, .8);
    }
     
    .social li {
        display: inline-block;
        margin: 0 15px 0px 0px;
        padding: 0;
    }
     
    .social li a { color: #fff; }
     
    .social li a:hover { color: #11ABB0; } 
`;
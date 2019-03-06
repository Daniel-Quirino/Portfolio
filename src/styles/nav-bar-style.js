import styled from 'styled-components';

export const NavBarStyle = styled.h1`

font-size: 16px;

    
#nav-wrap ul, #nav-wrap li, #nav-wrap a {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    margin: 0px;
    padding: 0px
}

#nav-wrap {
    font: 12px 'opensans-bold', sans-serif;
    width: 100%;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    margin: 0 auto;
    z-index: 100;
    position: fixed;
    left: 0;
    top: 0;
}

.opaque { background-color: #333; }

#nav-wrap > a.mobile-btn { 
    display: none; 
}

ul#nav {
    min-height: 48px;
    width: auto;
    text-align: center;
}

ul#nav li {
    position: relative;
    list-style: none;
    height: 48px;
    display: inline-block;
}

ul#nav li a {
    display: inline-block;
    padding: 8px 13px;
    line-height: 32px;
    text-decoration: none;
    text-align: left;
    color: #fff;

    -webkit-transition: color .2s ease-in-out;
    -moz-transition: color .2s ease-in-out;
    -o-transition: color .2s ease-in-out;
    -ms-transition: color .2s ease-in-out;
    transition: color .2s ease-in-out;
}

ul#nav li.current a { 
    color: #F06000; 
}
`;



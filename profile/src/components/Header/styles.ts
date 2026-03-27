import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
`;

export const ContainerList = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    flex-direction: column;
    background-color: #1f76f0;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    margin: 20px;
    width: 30%;
    height: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
`


export const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Item = styled.li`
    width: 100%;
    margin: 0 10px;
    padding: 20px;
    list-style: none;
    font-weight: 600;
    
    a {
        text-decoration: none;
        color: #f8f8f8;
    }

    a:hover {
        color: #bdbdbd;
        transition: 0.5s;
    }

    img {
        width: 50px;
        height: 50px;
    }
`
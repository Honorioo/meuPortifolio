import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    flex-direction: column;
    background-color: #1f76f0;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    width: 100%;
    height: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
`;

export const List = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
`

export const Item = styled.li`
    width: 100%;
    margin: 0 10px;
    padding: 20px;
    list-style: none;
    font-weight: 600;
    a {
        text-decoration: none;
        color: #FFFFFF;
    }
    img {
        width: 50px;
        height: 50px;
    }
`
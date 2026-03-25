import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    padding: 7%;
    width: 100%;
    box-sizing: border-box;
    text-align: center;
`;

export const Description = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50vh;
    margin: 0 auto;
    align-items: start;
        
    .profile-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 400px;
        
        h1 {
            font-size: 50px;
            margin-bottom: 20px;
        }

        img {
            width: 310px;
            height: 330px;
            border-radius: 50%;
            border: 5px solid #FFFFFF;
        }
    }

    .card-container {
        display: flex;
        overflow-y: auto;
        max-height: 400px;
        flex-direction: column;
        align-items: center;


        .card {
            background-color: #185ab8;
            color: #FFFFFF;
            padding: 20px;
            margin-bottom: 10px;
            border-radius: 10px;
            width: 400px
        }
    }
`;
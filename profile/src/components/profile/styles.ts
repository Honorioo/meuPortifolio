import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    margin-top: 8%;
    width: 100%;
    flex-direction: column;
    box-sizing: border-box;
    text-align: center;
    justify-content: center;


    @media (max-width: 900px) {
        margin-top: 60px;
        padding: 20px;
    }
`;

export const Description = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    align-items: start;
    width: 100%;
    max-width: 1200px;
    gap: 40px;

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        justify-items: center;
    }

    .profile-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        width: 100%;
        max-width: 400px;

        h1 {
            font-size: 50px;
            margin-bottom: 20px;
            color: #1f76f0;

            @media (max-width: 900px) {
                font-size: 32px;
            }
        }

        img {
            width: 100%;
            max-width: 310px;
            height: auto;
            border-radius: 50%;
            border: 5px solid #1f76f0;
        }
    }

    .card-container {
        display: flex;
        margin-top: 20px;
        max-height: 400px;
        flex-direction: column;
        align-items: center;
        overflow-y: auto;
        width: 100%;

        h2 {
            text-align: center;
        }

        .card {
            background-color: #1f76f0;
            color: #f8f8f8;
            padding: 20px;
            margin-bottom: 10px;
            border-radius: 10px;
            width: 100%;
            max-width: 400px;
        }

        a {
            text-decoration: none;
            color: #f8f8f8;
        }
    }
`;

export const Sobre = styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 90px;
        min-height: 300px;

        padding: 60px 20px;
        align-items: center;
        text-align: center;
        width: 100vw;

        background-color: #1f76f0;
        color: #f8f8f8;
        
        .sobre-content {
            display: flex;
            flex-direction: column;
            margin-top: 100px;
            
            h2 {
                font-size: 40px;
                max-width: 600px;

                margin-bottom: 20px;

                @media (max-width: 900px) {
                    font-size: 28px;
                    margin-top: 20px;
                }
            }  
            p {
                display: flex;
                text-align: center;
            
                width: 74%;
                flex-direction: column;
                font-size: 18px;
                margin: 0 auto;
                line-height: 1.6;
                text-align: justify;
            }
        }
`
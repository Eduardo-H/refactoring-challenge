import styled from 'styled-components';

export const Container = styled.div`
    background: #c72828;
    padding: 30px 0;

    header {
        width: 90%;
        margin: 0 auto;
        padding: 0 0 160px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        nav {
            div {
                button {
                    font-weight: 600;
                    border-radius: 8px;
                    border: 0;
                    background: #39b100;
                    color: #fff;

                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    .text {
                        padding: 16px 24px;
                    }

                    .icon {
                        display: flex;
                        padding: 16px 16px;
                        background: #41c900;
                        border-radius: 0 8px 8px 0;
                        margin: 0 auto;
                    }

                    @media (max-width: 768px) {
                        .text {
                            padding: 10px 14px;
                        }

                        .icon {
                            display: flex;
                            padding: 10px 10px;
                            background: #41c900;
                            border-radius: 0 8px 8px 0;
                            margin: 0 auto;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 1080px) {
        header {
            width: 100%;
            padding: 0 20px 160px;

            nav {
                div {
                    button {
                        font-size: 14px;
                    }
                }
            }
        }
    }

    @media (max-width: 720px) {
        img {
            width: 150px;
        }
    }
`;

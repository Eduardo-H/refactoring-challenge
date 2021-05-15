import styled from 'styled-components';

interface HeaderProps {
    available: boolean;
}

export const Container = styled.div<HeaderProps>`
    background: #f0f0f5;
    border-radius: 8px;

    header {
        background: #ffb84d;
        border-radius: 8px 8px 0px 0px;
        height: 192px;
        overflow: hidden;
        transition: 0.3s opacity;
        text-align: center;

        opacity: ${props => !props.available && 0.3};

        img {
            width: 100%;
            pointer-events: none;
            user-select: none;
            object-fit: cover;
        }
    }

    section.body {
        padding: 30px;

        h2 {
            color: #3d3d4d;
        }

        p {
            color: #3d3d4d;

            margin-top: 16px;
        }

        .price {
            font-style: normal;
            font-size: 24px;
            line-height: 34px;
            color: #39b100;

            b {
                font-weight: 600;
            }
        }
    }

    section.footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        padding: 20px 30px;
        background: #e4e4eb;
        border-radius: 0px 0px 8px 8px;

        div.icon-container {
            display: flex;

            button {
                background: #fff;
                padding: 10px;
                border-radius: 8px;
                display: flex;
                border: none;
                transition: 0.1s;

                svg {
                    color: #3d3d4d;
                }

                & + button {
                    margin-left: 6px;
                }
            }
        }

        div.availability-container {
            display: flex;
            align-items: center;

            p {
                color: #3d3d4d;
            }

            .switch {
                position: relative;
                display: inline-block;
                width: 80px;
                height: 32px;
                margin-left: 12px;

                & input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #c72828;
                    -webkit-transition: 0.4s;
                    transition: 0.4s;
                    border-radius: 16px;

                    &:before {
                        position: absolute;
                        content: '';
                        height: 20px;
                        width: 20px;
                        left: 8px;
                        bottom: 6px;
                        background-color: white;
                        -webkit-transition: 0.4s;
                        transition: 0.4s;
                        border-radius: 10px;
                    }
                }

                input:checked + .slider {
                    background-color: #39b100;
                }

                input:focus + .slider {
                    box-shadow: 0 0 1px #2196f3;
                }

                input:checked + .slider:before {
                    -webkit-transform: translateX(44px);
                    -ms-transform: translateX(44px);
                    transform: translateX(44px);
                }
            }
        }
    }

    @media (max-width: 1080px) {
        margin-bottom: 20px;

        section.footer {
            padding: 20px 20px;

            div.availability-container {
                .switch {
                    width: 60px;

                    input:checked + .slider:before {
                        -webkit-transform: translateX(24px);
                        -ms-transform: translateX(24px);
                        transform: translateX(24px);
                    }
                }
            }
        }
    }
`;

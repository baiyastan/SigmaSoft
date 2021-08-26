import styled from "styled-components"

export const AeroHeader = styled.div`
    width: 100%;
    img {
        width: 100%;
        height: 100%;
    }
`
export const Spacer = styled.div`
    height: 83px;
`
export const AeroTitle = styled.h1`
    font-weight: 600;
    font-size: 48px;
    line-height: 96px;
    color: #093077;
    margin: ${props => props.margin ? props.margin : '100px 0 80px'};
    text-align: center;
`
export const AeroBody = styled.section`
    max-width: 1440px;
    padding: 0 100px;
    margin: 0 auto;
    .item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: ${props => props.itemBottom ? props.itemBottom : '159px'};
        p {
            font-family: 'Roboto', sans-serif;
            max-width: 499px;
            font-size: 18px;
            line-height: 150%;
            color: #666666;
        }
        &__desc {
            max-width: 399px;
            margin-right: 100px;
            ul {
                list-style: none;
                padding-left: 0;
                li {
                    text-indent: 2px;
                }
                li::before {
                    content: "-  ";
                    text-indent: -5px;
                }
            }
        }
    }
`
export const Container = styled.div`
    max-width: 1440px;
    margin: 0 100px;
`
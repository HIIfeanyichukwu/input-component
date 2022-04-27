import styled from 'styled-components';

const AsideElement = styled.aside`
    background: #FAFBFD;
    font-family: "Poppins", sans-serif;
`

const AsideMainText = styled.h1`
    color: #090F31;
    margin-block: 47.07px 122px;
    font-size: 13px;
    font-weight: 600;
    line-height: 19.5px;
`
const Orange = styled.span`
    color: #F7542E;
`

const AsideList = styled.ul`
    list-style: none;
    font-family: "Noto Sans JP", sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-transform: capitalize;
    line-height: 20px;
    color: #9e9e9e;

    a {
        display: block;
        color: inherit;
        text-decoration: none;
    }

    .selected {
        color: #090f31;
        font-weight: 700;
    }
`

const Aside = (props) => {
    return (
        <AsideElement className='aside'>
            <AsideMainText className='aside-main-text'>
                <Orange>Dev</Orange>challenges.io
            </AsideMainText>
            <AsideList className="aside-list">
                <li className="aside-list-item">
                    <a href="">colors</a>
                </li>
                <li className="aside-list-item">
                    <a href="">typography</a>
                </li>
                <li className="aside-list-item">
                    <a href="">spaces</a>
                </li>
                <li className="aside-list-item">
                    <a href="">buttons</a>
                </li>
                <li className="aside-list-item selected">
                    <a href="">inputs</a>
                </li>
                <li className="aside-list-item">
                    <a href="">grid</a>
                </li>
            </AsideList>
        </AsideElement>
    )
}

export default Aside;
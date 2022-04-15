import styled from 'styled-components'

const Section = styled.section`

`

const Title = styled.p`
    font-family: "Ubuntu Mono", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #333333;
    margin-block-end: 1rem;
`

const Label = styled.label`
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 17.38px;
    color: #333333;
`

const Input = styled.input`
    width: 100%;
    border: 1px solid #828282;
    border-radius: 8px;
    padding-block: 18px;
    padding-inline: 12px;
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 20.27px;
    color: #828282;
`

const InputDisabled = styled.input`
    width: 100%;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding-block: 18px;
    padding-inline: 12px;
    font-family: "Noto Sans JP", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 20.27px;
    color: #828282;
    background: #e0e0e0;
`

const InputContainer = styled.div`
    width: 200px;
    position: relative;
`
const Span = styled.span`
    color: inherit;
    font-weight: 400;
    font-family: "Noto Sans JP", sans-serif;
    font-size: 10px;
    line-height: 14.48px;
    margin-block-start: 4px;
    display: block;
`
const Main = styled.main`
    overflow-y: auto;
    height: 100%
`

export {
    Input,
    InputDisabled,
    Title,
    Label,
    InputContainer,
    Span,
    Section,
    Main
}
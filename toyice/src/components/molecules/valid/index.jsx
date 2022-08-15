import styled from 'styled-components';

const StyledError = styled.div`
    position: absolute;
    color: #EC6536;
    margin-left: 20px;
    margin-top: 5px;
    font-size: 13px;
`;

const Valid = (props) => {
    return (
        <StyledError hidden={props.hidden}>
            {props.children}
        </StyledError>
    );
}

export default Valid;
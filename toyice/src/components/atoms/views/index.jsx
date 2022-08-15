import styled from 'styled-components';

const StyledViewsWrapper = styled.div`
    margin-right: 20px;
    cursor: default;
`;

const StyledViews = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    word-break: keep-all;
`;

const Views = ({ num }) => {

    return (
        <StyledViewsWrapper>
            <StyledViews>
                <div style={{ fontSize: '37px', display: 'inline-block', fontFamily: 'Inter', fontWeight: '400', lineHeight: '40px'}}>😮</div>
                <span style={{ fontSize: '15px', color: '#C2C2C2', marginTop: '5px'}}>조회수{num}</span>
            </StyledViews>
        </StyledViewsWrapper>
    );
}

export default Views;
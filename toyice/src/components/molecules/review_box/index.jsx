import styled from "styled-components";

import Img from "../../atoms/img";
import Span from "../../atoms/span";

import './style.css';
import profile_default from '../../../assets/svg/profile-default.svg';

const StyledReviewBox = styled.div`
    display: flex;
    padding: 30px 0px 30px 57px;
    border: 1px solid #F0F0F0;
    border-left-width: 0px;
    border-right-width: 0px;
    border-top-width: 0px;
`;

const StyledReviewBoxText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
`;

const ReviewBox = (props) => {
    
    return (
        <StyledReviewBox id={props.id && props.id}>
            <Img src={profile_default} width={50} height={50} />
            <StyledReviewBoxText>
                <div>
                    <Span size={'span-small'}>Name</Span>
                </div>
                <div>
                    <Span size={'span-small'}>{props.data.content}</Span>
                </div>
            </StyledReviewBoxText>
        </StyledReviewBox>
    );
}

export default ReviewBox;
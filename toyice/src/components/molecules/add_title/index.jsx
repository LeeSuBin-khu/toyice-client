import styled from "styled-components";

import Img from "../../atoms/img";
import Span from "../../atoms/span";

import dot from '../../../assets/svg/dot.svg';

const StyledAddTitle = styled.div`
    position: relative;
    margin-bottom: 13px;
`;

const addTitle = (props) => {
    const { isDot, bigTitle, smallTitle } = props;

    return (
        <StyledAddTitle>
            {isDot && <Img src={dot} className={'basic-info-dot'} />}
            <Span size={'span-medium'} color={'span-point'} className='add-toy-bigTitle'>{bigTitle}&nbsp;&nbsp;</Span>
            <Span size={'span-xsmall'} color={'span-color3'} className='add-toy-smallTitle'>{smallTitle}</Span>
        </StyledAddTitle>
    );
}

export default addTitle;
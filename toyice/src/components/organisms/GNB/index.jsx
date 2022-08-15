import { memo } from 'react';
import styled from 'styled-components';

import Button_list from '../../molecules/button_list/index';
import Img from '../../atoms/img';

import profile_default from '../../../assets/svg/profile-default.svg';

const StyledGNB = styled.div`
    width: 100%;
    height: 64px;
    background-color: #FEFEFE;
    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    word-break: keep-all;
`;

const StyledGNBContents = styled.div`
    width: 1267px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
`;

const GNB = () => {
    return (
        <StyledGNB className='GNB'>
            <StyledGNBContents>
                <Button_list className='GNB-btn-list' />
                <Img className='GNB-profile' src={profile_default} height={38} width={38} />
            </StyledGNBContents>
        </StyledGNB>
    );
}

export default memo(GNB);
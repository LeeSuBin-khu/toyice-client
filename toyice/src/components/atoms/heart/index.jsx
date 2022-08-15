import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import { toyId } from '../../../App';

import inactive from '../../../assets/svg/good-btn.svg';
import active from '../../../assets/svg/good-btn-active.svg';

const StyledHeart = styled.div`
    cursor: pointer;
`;

const StyledLikes = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    word-break: keep-all;
`;

const Heart = ({ num }) => {
    const [isGood, setIsGood] = useState(0);
    const id = useRecoilValue(toyId);
    
    const likeClickHandler = () => {
        if(isGood) setIsGood(0);
        else setIsGood(1);
        const response = axios.put(`${process.env.REACT_APP_SERVER_HOST}/toy/${id}/like`);
    }

    return (
        <StyledHeart onClick={likeClickHandler}>
            <StyledLikes>
            {isGood ? <img src={active} width={45} height={38} /> : <img src={inactive} width={45} height={38} />}
                <span style={{ fontSize: '15px', color: isGood ? '#FF5151' : '#C2C2C2', marginTop: '5px' }}>좋아요{!isGood ? num : num + 1}</span>
            </StyledLikes>
        </StyledHeart>
    );
}

export default Heart;
import React from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';

import { projectType } from '../../../pages/project_main/templates';

import Img from '../../atoms/img';

import stone_orange from '../../../assets/svg/stone-orange.svg';
import stone_yellow from '../../../assets/png/yellow.png';
import stone_blue from '../../../assets/png/blue.png';
import stone_orange_eye from '../../../assets/svg/stone-orange-eye.svg';
import stone_yellow_eye from '../../../assets/png/yellow-eye.png';
import stone_blue_eye from '../../../assets/png/blue-eye.png';

import './style.css';

const StyledBtnStones = styled.div`
    position: relative;
    width: 286.82px;
    height: 257.13px;
    margin-left: auto;
    margin-right: auto;
`;

const ImgStone = () => {
    const [type, setType] = useRecoilState(projectType);

    const stoneClickHandler = (type) => setType(type);

    const img_props = [{ src: type === '아이디어' ? stone_orange_eye : stone_orange, 
                         className: type === '아이디어' ? 'orange-eye' : 'orange', 
                         onClick: () => stoneClickHandler(type !== '아이디어' ? '아이디어' : '')
                       }, 
                       { src: type === '서비스 개발' ? stone_blue_eye : stone_blue, 
                         className: type === '서비스 개발' ? 'blue-eye' : 'blue', 
                         onClick: () => stoneClickHandler(type !== '서비스 개발' ? '서비스 개발' : '')
                       },
                       { src: type === '디자인' ? stone_yellow_eye : stone_yellow, 
                         className: type === '디자인' ? 'yellow-eye' : 'yellow', 
                         onClick: () => stoneClickHandler(type !== '디자인' ? '디자인' : '')
                        }]

    return (
        <StyledBtnStones className='img-stone'>
        {img_props.map( (img, key) =>
            <Img {...img} key={key} />
        )}
        </StyledBtnStones>
    );
}

export default ImgStone;
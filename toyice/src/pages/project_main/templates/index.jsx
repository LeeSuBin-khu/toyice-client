import { useEffect } from 'react';
import { RecoilRoot, atom } from 'recoil';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

import Header from '../../../components/organisms/header';
import Body from '../../../components/organisms/body';
import Img_stone from '../../../components/molecules/img_stone';
import Button from '../../../components/atoms/button';
import Card from '../../../components/organisms/project_card';

export const projectType = atom({ key: 'projectType', default: ''});

export default function Index() {

    const scrollHandler = ( {target} ) => {
        const scroll = parseInt(target.scrollingElement.scrollTop);
        const scrollIcon = document.querySelector('.scroll-top');
        if( scroll > 1378 ) scrollIcon.style.display = 'block';
        else scrollIcon.style.display = 'none';
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [])

    return (
        <RecoilRoot>
            <Header className='project-main-header'>
                <Img_stone />
                <Button size={'button-large'} theme={'button-point'} className='main-header-btn' onClick={ () => window.location.assign('/create-toy') }>나의 Toy 등록하기</Button>
            </Header> 
            <Body className='project-main-body'>
                <Card />
                <a href="#" className='scroll-top' >
                    <BsFillArrowUpCircleFill color='#D9D9D9' size='50px'/>
                </a>
            </Body>
        </RecoilRoot>
    );
}
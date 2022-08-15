import { useMemo } from 'react';
import styled from "styled-components";
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

import { useFetch } from '../../state';
import { toyId } from '../../App';

import Header from "../../components/organisms/header";
import Body from "../../components/organisms/body";
import Span from "../../components/atoms/span";
import TagList from "../../components/molecules/tag_list";
import Profile from "../../components/molecules/profile";
import Heart from "../../components/atoms/heart";
import Notion from "../../components/atoms/notion";
import Review from "../../components/organisms/review";
import Views from '../../components/atoms/views';

import profile_default from '../../assets/svg/profile-default.svg';

const StyledHeaderFooter = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 13px;
`;

const StyledEmoji = styled.div`
    float: right;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 130px;
`;

export default function Index() {
    const navigation = useNavigate();
    const urlId = window.location.pathname.split('/').at(-1);
    const info = useFetch(`/toy/${urlId}`);
    const setId = useSetRecoilState(toyId);

    useMemo(() => {
        setId(urlId);
    }, [])

    if(!info) return null;

    return (
        <>
        <Header className='project-info-header' bgImg={info.mainImage} >
            <Span size={'span-xlarge'} color={'span-color4'}>{info.title}</Span>
            <StyledHeaderFooter>
                <TagList tags={info.tagList !== null ? [info.type].concat(info.tagList) : [info.type]}/>
                <Profile src={profile_default} w={35} h={35} s={'span-small'} c={'span-color4'}>수빈</Profile>
            </StyledHeaderFooter>
        </Header> 
        <Body className='project-info-body'>
            <StyledEmoji>
                <div onClick={ () => navigation(`/edit-toy/${urlId}`, { state: { data: info }}) }>수정</div>
                <Views num={info.views}/>
                <Heart num={info.likes}/>
            </StyledEmoji>
            <Notion data={info.notionUrl}/>
            <div className='project-info-body-review'>
                <Span size={'span-large'} color={'span-color1'}>Review</Span>
                <Review data={info.reviewList} id={info.id} />
            </div>
        </Body>
        </>
    );
}
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { atom, useRecoilValue } from 'recoil';
import axios from 'axios';

import Span from '../../components/atoms/span';
import Body from '../../components/organisms/body';
import AddBasicInfo from '../../components/molecules/add_basicInfo';
import AddProjectType from '../../components/molecules/add_projectType';
import AddTag from '../../components/molecules/add_tag';
import AddLink from '../../components/molecules/add_link';
import Button from '../../components/atoms/button';

export const mainImage = atom({ key: 'img', default: ''});
export const title = atom({ key: 'title', default: ''});
export const description = atom({ key: 'description', default: ''});
export const type = atom({ key: 'type', default: ''});
export const tags = atom({ key: 'tags', default: []});
export const notionUrl = atom({ key: 'notionUrl', default: ''});

export default function Index({ edit }) {
    const { state } = useLocation();
    const [disabled, setDisabled] = useState(true);
    const timg = useRecoilValue(mainImage);
    const ttitle = useRecoilValue(title);
    const tdes = useRecoilValue(description);
    const ttype = useRecoilValue(type);
    const ttags = useRecoilValue(tags);
    const tnotion = useRecoilValue(notionUrl);

    const header = { headers: { "Content-Type": 'multipart/form-data' } };
    
    const addClickHandler = async () => {
        const Json = {
            "description": tdes,
            "notionUrl": tnotion,
            "title": ttitle,
            "type" : ttype,
            "tagList" : ttags
        };

        const formData = new FormData();
        formData.append('image', timg);
        formData.append('request', new Blob([ JSON.stringify(Json) ], { type: "application/json" }));

        if(!edit) {
            await axios.post(`${process.env.REACT_APP_SERVER_HOST}/toy`, formData, header).then( res => res.status === 200 ? window.location.assign("/") : console.log("error") );
        } else {
            await axios.put(`${process.env.REACT_APP_SERVER_HOST}/toy/${state.data.id}`, formData, header).then( res => res.status === 200 ? window.history.back() : console.log("error") );
        }

    }

    useEffect(() => {
        if(timg !== "" && ttitle !== "" && tdes !== "" && ttype !== "" && tnotion.includes("https://") && tnotion.includes("notion.site")) setDisabled(false);
        else setDisabled(true);
    }, [timg, ttitle, tdes, ttype, tnotion])

    useEffect(() => {
        document.body.scrollTop = window.scrollTo(0,0);
    }, [])

    return (
        <Body className='project-add-body'>
            <div>
                <Span color={'span-point'} size={'span-large'} className='add-toy-title'>My Toy { !edit ? '등록하기' : '수정하기'}</Span>
            </div>
            <AddBasicInfo mainImage={state && state.data.mainImage} title={state && state.data.title} description={state && state.data.description}/>
            <AddProjectType type={state && state.data.type} />
            <AddTag tagList={state && state.data.tagList} />
            <AddLink notionUrl={state && state.data.notionUrl} />
            <Button className='project-add-btn' theme='button-point' size='button-large' onClick={addClickHandler} disabled={disabled}>나의 Toy { !edit ? '등록하기' : '수정하기'}</Button>
        </Body>
    );
}
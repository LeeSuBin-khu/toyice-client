import { useEffect, useRecoilState } from 'react';
import { useSetRecoilState } from 'recoil';
import { useState } from 'react';
import styled from 'styled-components';
import { FiX } from 'react-icons/fi';
import classnames from 'classnames';

import { tags } from '../../../pages/project_add';

import Input from '../../atoms/input';
import TagList from '../tag_list';

const StyledTagging = styled.div`
    display: flex;
    align-items: center;
    padding-left: 13px;
    width: 609px;
    height: 66px;
    background: #F0F0F0;
    border-radius: 30px;
`;

const Tagging = (props) => {
    const [tag, setTag] = useState("");
    const [tagList, setTagList] = useState(props.tagList ? props.tagList : []);
    const setToyTags = useSetRecoilState(tags);
    const class_props = classnames('tagging-input add-toy-input', tag !== "" && 'tagging-add-toy-active', tagList.length !== 0 && 'tagging-active');

    useEffect(() => {
        const newTags = tagList;
        setToyTags(newTags);
    }, [tagList])

    return (
        <StyledTagging>
            <TagList className='tagging-tag' tags={tagList} setTags={setTagList} icon={<FiX strokeWidth={2.5} size={16}/>} h={40}/>
            {tagList.length < 2 && 
            <Input value={tag} setValue={setTag} setResult={setTagList} placeholder={'| 태그를 입력해주세요.'} className={class_props} maxLength={5}/> }
        </StyledTagging>
    );
}

export default Tagging;
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import classnames from 'classnames';
import { useEffect } from 'react';

import { notionUrl } from '../../../pages/project_add';

import AddTitle from '../add_title';
import Input from "../../atoms/input";
import Valid from '../valid';

const StyledError = styled.div`
    position: absolute;
    color: #EC6536;
    margin-left: 20px;
    margin-top: 5px;
    font-size: 13px;
`;

const AddLink = (props) => {
    const [url, setUrl] = useRecoilState(notionUrl);
    const valid = url === "" || url.includes("https://") && url.includes("notion.site") ? true : false;
    const class_props = classnames('add-toy-input add-toy-active', !valid && 'add-toy-valid');

    useEffect(() => {
        props.notionUrl && setUrl(props.notionUrl);
    }, [])

    return (
        <div>
            <AddTitle isDot={true} bigTitle={'링크'} smallTitle={'Toy에 대한 정보를 정성스럽게 담은 노션 URL을 입력해 주세요.'} />
            <div>
                <Input className={class_props} 
                        placeholder='URL을 첨부해주세요.'
                        onChange={ ({ target }) => setUrl(target.value) } 
                        value={url}
                />
                <Valid hidden={valid}>{url.includes("notion") ? '공유된 노션 url을 입력해주세요.' : '잘못된 url입니다.'}</Valid>
            </div>
        </div>
    );
}

export default AddLink;
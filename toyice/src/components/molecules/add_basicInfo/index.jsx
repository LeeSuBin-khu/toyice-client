import { useRecoilState } from 'recoil';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FiPlus } from 'react-icons/fi';

import { mainImage, title, description, toyFormData } from '../../../pages/project_add';

import AddTitle from '../add_title';
import Input from '../../atoms/input';
import TextArea from '../../atoms/textarea';
import Label from '../../atoms/label';
import TextNumCount from '../textNumCount';
import Valid from '../valid';

const StyledAddDiscription = styled.div`
    display: grid;
    grid-template-columns: 609px 1fr 1fr;
    grid-template-rows: 66px 1fr;
    column-gap: 34px;
    row-gap: 26px;
    margin-top: 27px;
    height: 232px;
`;

const StyledAddImg = styled.div`
    grid-column: 1/1;
    grid-row: 1/5;
    background: #F0F0F0;
    border-radius: 30px;
`;

const StyledAddImgSetting = styled.div`
    position: absolute;
    top: -95.5px;
    left: -282px;
    width: 609px;
    height: 232px;
    border-radius: 30px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`;

const StyledAddImgIcon = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -95.5px;
    left: -282px;
    width: 609px;
    height: 232px;
    border-radius: 30px;
`;

const AddBasicInfo = (props) => {
    const [toyImg, setToyImg] = useRecoilState(mainImage);
    const [toyTitle, setToyTitle] = useRecoilState(title);
    const [toyDescription, setToyDescription] = useRecoilState(description);
    const [prevImg, setPrevImg] = useState(props.mainImage ? props.mainImage : "");

    const imgToFile = async ( url ) => {
        const response = await fetch(url);
        const data = await response.blob();
        const filename = url.split("/").pop();
        return new File([data], filename,  { type: data.type } );
    }

    useEffect(() => {
        props.mainImage &&  imgToFile(props.mainImage).then( res => setToyImg(res) );
        props.title && setToyTitle(props.title);
        props.description && setToyDescription(props.description);
    }, [])

    const imgChangeHandler = ({ target }) => {
        setToyImg(target.files[0]);
        setPrevImg(URL.createObjectURL(target.files[0]));
    }

    return (
        <div>
            <AddTitle isDot={true} bigTitle={'기본정보'} smallTitle={'기본정보는 Toy의 메인카드에 노출됩니다.'} />
            <StyledAddDiscription>
                <StyledAddImg>
                    <Input type={'file'} className={'add-toy-input'} id={'file-input'} onChange={imgChangeHandler}>
                        <Label className={'add-toy-label'} htmlFor='file-input'>
                        {prevImg !== "" ? 
                            <StyledAddImgSetting style={{ backgroundImage: `url(${prevImg})` }} /> : 
                            <StyledAddImgIcon>
                                <FiPlus color='#FFFFFF' size='45px'/>
                            </StyledAddImgIcon>
                        }
                        </Label>
                    </Input>
                </StyledAddImg>
                <div style={{ position: 'relative', gridColumn: '2/4', gridRow: '1/1'}}>
                    <Input value={toyTitle} className={toyTitle === "" ? 'add-toy-input' : 'add-toy-input add-toy-active'} onChange={ ({ target }) => setToyTitle(target.value) } placeholder='Toy 제목을 입력하세요.' maxLength={23}/>
                    <TextNumCount num={toyTitle.length} maxNum={23} className={'add-toy-textNum'} top='23px' left='calc( 100% - 65px )' />
                </div>
                <div style={{ position: 'relative', gridColumn: '2/4', gridRow: '2/5'}}>
                    <TextArea value={toyDescription} className={toyDescription === "" ? 'add-toy-textarea' : 'add-toy-textarea add-toy-active'} onChange={ ({ target }) => setToyDescription(target.value) } placeholder='Toy를 한 줄로 요약해 소개해 주세요.' maxLength={56}/>
                    <TextNumCount num={toyDescription.length} maxNum={56} className={'add-toy-textNum'} top='105px' left='calc( 100% - 65px )' />
                </div>
            </StyledAddDiscription>
        </div>
    );
}

export default AddBasicInfo;
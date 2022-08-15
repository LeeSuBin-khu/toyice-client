import { useRecoilState } from 'recoil';
import { useEffect } from 'react';

import { type } from '../../../pages/project_add';

import Img from '../../atoms/img';
import AddTitle from "../add_title";
import Selectbox from "../selectbox";

import orange from '../../../assets/svg/stone-orange-eye.svg';
import yellow from '../../../assets/svg/stone-yellow-eye.svg';
import blue from '../../../assets/svg/stone-blue-eye.svg';

const AddProjectType = (props) => {
    const [toyType, setToyType] = useRecoilState(type);

    useEffect(() => {
        props.type && setToyType(props.type);
    }, [])
    
    return (
        <div style={{ position: 'relative' }}>
            <AddTitle isDot={true} bigTitle={'Toy 유형'} smallTitle={'등록할 Toy의 유형을 선택해주세요.'} />
            <Selectbox 
                className='add-toy-selectbox' 
                placeholder='사람들에게 보여질 Toy의 형태를 골라주세요.'
                btnList={['아이디어', '디자인', '서비스 개발']}
                onClick={ ({ target }) => setToyType(target.innerText) }
            />
            {toyType !== "" && 
                <Img className='add-toy-stoneImg' 
                    src={toyType === '아이디어' ? orange : toyType === '디자인' ? yellow : toyType === '서비스 개발' ? blue : null}
                    width={211.9}
                    height={152.71} 
                />
            }
        </div>
    );
}

export default AddProjectType;
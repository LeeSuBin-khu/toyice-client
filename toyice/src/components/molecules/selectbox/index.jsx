import { useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
import { BiCaretDown, BiCaretUp } from 'react-icons/bi';
import { useRecoilValue } from 'recoil';

import { type } from '../../../pages/project_add';

import './style.css'

const Selectbox = (props) => {
    const [isDrop, setIsDrop] = useState(false);
    const { placeholder, btnList, className, onClick } = props;
    const class_props = classnames('selectbox', className);
    const toyType = useRecoilValue(type);
    const selectRef = useRef();

    const selectClickHandler = () => {
        if(isDrop) setIsDrop(false);
        else setIsDrop(true);
    }
    
    const closeHandler = ({ target }) => {
        if(!selectRef.current.contains(target)) setIsDrop(false);
    }

    useEffect( () => {
        window.addEventListener('click', closeHandler);
        return () => {
            window.removeEventListener("click", closeHandler);
          };
    }, [])

    return (
        <div className={!isDrop ? class_props : `selectbox-active ${className}`} ref={selectRef} style={{position: 'relative'}}>
            <div className={!isDrop ? 'selectbox-placeholder' : 'selectbox-placeholder selectbox-placeholder-hidden' } onClick={selectClickHandler}>
                <div className={toyType === "아이디어" ? 'orange' :  toyType === "디자인" ? 'yellow' : toyType === "서비스 개발" ? 'blue' : null}>
                    {!isDrop && toyType === "" ? placeholder : toyType}
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {!isDrop ? <BiCaretDown /> : <BiCaretUp />}
                </div>
            </div>
            <ul className={!isDrop ? 'selectbox-ul-hidden' : null}>
                {btnList.map( (btn, key) => 
                    <li key={key} id={'selectbox-li-' + key} onClick={onClick}><button key={key} id={'selectbox-btn-' + key}>{btn}</button></li>
                )}
            </ul>
        </div>
    );
};

export default Selectbox;
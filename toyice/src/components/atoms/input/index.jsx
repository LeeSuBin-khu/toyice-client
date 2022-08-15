import { useEffect, useCallback, memo } from "react";
import classname from "classnames";
import styled from "styled-components";

import './style.css';

const StyledInput = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
`;

const Input = (props) => {
    const { setDisabled, type, value, setValue, setResult, placeholder, w, className, id, children, maxLength, onChange, onKeyPress } = props;
    const class_props = classname('input', w, className);

    const inputChangeHandler = useCallback( ({ target }) => {
        if(!onChange && setValue) {

            //tag 입력창일 경우,
            if(className.includes('tagging-input')) {
                const space = /\s/;

                if(space.exec(target.value)) {
                    target.focus();
                    target.value = target.value.replace(' ','');
                    return false;
                }
            }

            setValue(target.value);
        }
    }, [value]); ///.......???

    const inputEnterHandler = () => {
        if(setResult) {
            if(window.event.keyCode === 13) {
                setResult && setResult( prev => [...prev, value]);
                setValue("");
            }
        }
    };

    const input_props = { type, placeholder, value, onChange: !onChange ? inputChangeHandler : onChange, id, onKeyPress:!onKeyPress ? inputEnterHandler : onKeyPress, maxLength };

    useEffect( () => { if(setDisabled) value === "" ? setDisabled(true) : setDisabled(false) }, [value])

    return (
        <StyledInput>
            <input {...input_props} className={class_props} />
            {children}
        </StyledInput>
    );
}

export default memo(Input);
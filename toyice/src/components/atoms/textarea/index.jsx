import { useCallback } from 'react';

import './style.css';

const TextArea = (props) => {
    const { className, placeholder, onChange, maxLength } = props;
    return (
        <textarea {...props} ></textarea>
    );
}

export default TextArea;
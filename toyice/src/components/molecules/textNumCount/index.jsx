import './style.css';

const TextNumCount = (props) => {
    return (
        <div style={{ position: 'absolute', top: props.top, left: props.left }}>
            <span className={props.className}>{props.num}/{props.maxNum}</span>
        </div>
    );
}

export default TextNumCount;
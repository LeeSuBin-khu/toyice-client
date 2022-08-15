import AddTitle from '../add_title';
import Tagging from '../tagging';

const AddTag = ({ tagList }) => {
    return (
        <div>
            <AddTitle bigTitle={'추가 태그'} smallTitle={'메인카드에 노출되는 태그를 자유롭게 입력해 주세요.(최대 2개)'} />
            <Tagging tagList={tagList} />
        </div>
    );
}

export default AddTag;
import { Link } from "react-router-dom";
import base from "./Base.module.css"


function TextDiary(){

    return (
        <div className={base.container}> 
            <h1>문자 일기</h1>

            <Link to="/lobby"><button> 로비로 이동 </button></Link>
        </div>
    );
}

export default TextDiary;
import banana from "../assets/images/banana.png";
import strawberry from "../assets/images/strawberry.png";
import orange from "../assets/images/orange.png";
import monkey from "../assets/images/monkey.png";

let _imagesObjList = []

const imagesSorting = () => 0.5 - Math.random();

const createImageObj = (obj, index) => {
    return { id: index, src: obj }
}

const getImages = () => {
    _imagesObjList = [banana, strawberry, orange, monkey].map(createImageObj);
    return _imagesObjList;
}

const getRamdomImage = () => _imagesObjList.length > 0
    ? _imagesObjList.sort(imagesSorting)[0]
    : getImages().sort(imagesSorting)[0];

export default getRamdomImage;
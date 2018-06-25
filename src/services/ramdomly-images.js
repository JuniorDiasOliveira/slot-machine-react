import banana from "../assets/images/banana.png";
import strawberry from "../assets/images/strawberry.png";
import orange from "../assets/images/orange.png";
import monkey from "../assets/images/monkey.png";

let imagesObj = [banana, strawberry, orange, monkey].map((obj, index) => {
    return {
        id: index,
        src: obj
    }
});

const getRamdomImage = () => {
    return imagesObj.sort(
        () => 0.5 - Math.random()
    )[0];
}

export default getRamdomImage;
import { IMG_CDN } from "../utils/constant";
const MindCard = ({ data }) => {
    return (
        <div className="min-w-[160px]">
        <img src={IMG_CDN + data.imageId} alt={data.action?.text} className="w-36 h-48 object-cover"/>  
        </div>
    );
};
export default MindCard;
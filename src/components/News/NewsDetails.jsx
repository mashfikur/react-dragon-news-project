import { useParams } from "react-router-dom";


const NewsDetails = () => {
    const {ID}=useParams()
    return (
        <div>
            <h3>Welcome to news deatails of {ID}  </h3>
        </div>
    );
};

export default NewsDetails;
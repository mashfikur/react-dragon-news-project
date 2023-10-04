import PropTypes from 'prop-types'
import NewsCard from './NewsCard';
const News = ({allNews}) => {
    return (
        <div>
            {
              allNews.map((singleNews) =><NewsCard key={singleNews._id} singleNews={singleNews} ></NewsCard> )  
            }
        </div>
    );
};

News.propTypes={
    allNews:PropTypes.array,
}

export default News;
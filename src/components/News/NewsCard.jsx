
import PropTypes from 'prop-types'

const NewsCard = ({singleNews}) => {

    const {title}=singleNews

  return (
    <div>
        <h3 className="text-center text-2xl mb-20">{title}</h3>
    </div>
  )
}

NewsCard.propTypes = {
    singleNews:PropTypes.object
}

export default NewsCard
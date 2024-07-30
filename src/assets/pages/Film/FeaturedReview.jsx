const FeaturedReview = ({ title, description, score }) => (
    <>
        <div>
            <h3>{title}</h3>
            <p>{score}</p>
        </div>
        <div>
            <p>{description}</p>
        </div>
    </>
)

export default FeaturedReview;
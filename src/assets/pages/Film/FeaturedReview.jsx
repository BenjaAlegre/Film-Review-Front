const FeaturedReview = ({ title, description, score, user }) => (
    <>
        <div>
            <h3>{title}</h3>
            <p>{user}</p>
            <p>{score}</p>
        </div>
        <div>
            <p>{description}</p>
        </div>
        <button>See all reviews</button>
    </>
)

export default FeaturedReview;
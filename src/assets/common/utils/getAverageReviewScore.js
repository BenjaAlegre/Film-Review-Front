export const getAverageReviewScore = (reviews) =>
{
    const totalScore = reviews.reduce((accumulator, review) => {
        return accumulator + review.score;
    }, 0);
    
    const averageScore = reviews.length === 0 ? 0 : totalScore / reviews.length;
    
    const roundScore = Math.round(averageScore * 100) / 100

    return roundScore;
}

import type { Review } from '../../types/index';

const ProductReviews = ({ reviews }: { reviews: Review[] }) => {
  return (
    <section className="mt-5">
      <h2 className="h4 fw-bold mb-3">Reviews ({reviews.length})</h2>
      {reviews.length === 0 ? (
        <p className="text-muted">No reviews yet.</p>
      ) : (
        <div className="vstack gap-3">
          {reviews.map((review) => (
            <div key={review.id} className="card border-0 shadow-sm p-3">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <span className="fw-semibold">{review.username}</span>
                <span className="small">Rating: {review.rating} / 5</span>
              </div>
              <p className="text-muted mb-0">{review.description}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
export default ProductReviews;

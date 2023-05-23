import classes from './Card.module.css';

const Card = () => {
  return (
    <div>
      <h1>10,000+ of our users love our products.</h1>
      <h2>
        We only provide great products combined with excellent customer service. See what our satisfied customers are saying
        about our services.
      </h2>
      <div className={classes.rate1}>Rated 5 Stars in Reviews</div>
      <div className={classes.rate2}>Rated 5 Stars in Report Guru</div>
      <div className={classes.rate2}>Rated 5 Stars in BestTech</div>
      <div className={classes.review1}>
        <h3>Colton Smith </h3>
        <h4>Verified Buyer</h4>
        <p>
          "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original
          order, but we also received it in time. Excellent!"
        </p>
      </div>
      <div className={classes.review2}>
        <h3>Irene Roberts</h3>
        <h4>Verified Buyer</h4>
        <p>
          "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the
          purchase and the speed of delivery."
        </p>
      </div>
      <div className={classes.review3}>
        <h3>Anne Wallace</h3>
        <h4>Verified Buyer</h4>
        <p>
          "Put an order with this company and can only praise them for the very high standard. Will definitely use them again
          and recommend them to everyone!"
        </p>
      </div>
    </div>
  );
};

export default Card;

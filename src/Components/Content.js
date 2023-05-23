import ImgColton from '../../src/image-colton.jpg';
import ImgIrene from '../../src/image-irene.jpg';
import ImgAnne from '../../src/image-anne.jpg';
import IconStar from '../../src/icon-star.svg';

import classes from './Content.module.css';

const Content = () => {
  return (
    <div className={classes.card}>
      <h1>10,000+ of our users love our products.</h1>
      <h2>
        We only provide great products combined with excellent customer service. See what our satisfied customers are saying
        about our services.
      </h2>
      <div className={classes.rate1}>
        <img src={IconStar} className={classes.star} />
        <img src={IconStar} className={classes.star} />
        <img src={IconStar} className={classes.star} />
        <img src={IconStar} className={classes.star} />
        <img src={IconStar} className={classes.star} />
        <h6>Rated 5 Stars in Reviews</h6>
      </div>
      <div className={classes.rate2}>
        <img src={IconStar} className={classes.star} />
        <img src={IconStar} className={classes.star} />
        <img src={IconStar} className={classes.star} />
        <img src={IconStar} className={classes.star} />
        <img src={IconStar} className={classes.star} />
        <h6>Rated 5 Stars in Report Guru</h6>
      </div>
      <div className={classes.rate3}>
        <img src={IconStar} className={classes.star} />
        <img src={IconStar} className={classes.star} />
        <img src={IconStar} className={classes.star} />
        <img src={IconStar} className={classes.star} />
        <img src={IconStar} className={classes.star} />
        <h6>Rated 5 Stars in BestTech</h6>
      </div>
      <div className={classes.review1}>
        <img src={ImgColton} />
        <h3>Colton Smith </h3>
        <h4>Verified Buyer</h4>
        <p>
          " We needed the same printed design as the one we had ordered a week prior. Not only did they find the original
          order, but we also received it in time. Excellent!"
        </p>
      </div>
      <div className={classes.review2}>
        <img src={ImgIrene} />
        <h3>Irene Roberts</h3>
        <h4>Verified Buyer</h4>
        <p>
          " Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the
          purchase and the speed of delivery."
        </p>
      </div>
      <div className={classes.review3}>
        <img src={ImgAnne} />
        <h3>Anne Wallace</h3>
        <h4>Verified Buyer</h4>
        <p>
          " Put an order with this company and can only praise them for the very high standard. Will definitely use them
          again and recommend them to everyone!"
        </p>
      </div>
      <div className={classes.whiteSpace}></div>
    </div>
  );
};

export default Content;

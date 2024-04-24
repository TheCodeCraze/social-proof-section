import styles from "../styles/App.module.css";
import { ratings, testimonials } from "../data";
import { Rating } from "./Rating";
import { Testimonial } from "./Testimonial";

export const App = () => {
  return (
    <main className={styles.container}>
      <div className={styles.info}>
        <div className={styles.text}>
          <h1 className={styles.title}>
            10,000+ of our users love our products.
          </h1>
          <p className={styles.description}>
            We only provide great products combined with excellent customer
            service. See what our satisfied customers are saying about our
            services.
          </p>
        </div>
        <div className={styles.ratings}>
          {ratings.map((rating) => (
            <Rating key={rating.id} content={rating.content} />
          ))}
        </div>
      </div>
      <div className={styles.testimonials}>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.id} {...testimonial} />
        ))}
      </div>
    </main>
  );
};

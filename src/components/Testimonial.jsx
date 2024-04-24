import styles from "../styles/Testimonial.module.css";
import PropTypes from "prop-types";

export const Testimonial = ({ name, info, text, img }) => {
  return (
    <div className={styles.testimonial}>
      <div className={styles.profile}>
        <img
          src={img}
          className={styles.image}
          alt={`${name}'s profile image`}
        />
        <div className={styles.details}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.info}>{info}</p>
        </div>
      </div>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

import React from "react";
// css
import styles from "./BMIResult.module.scss";

const BMIResult = () => {
	return (
		<div className={styles.bmiResult}>
			<h3>Your BMI is...</h3>
			<data value="23.4" className={styles.bmiResult__data}>
				23.4
			</data>
			<p className={styles.bmiResult__text}>
				Your BMI suggests you're a healthy weight. Your ideal weight is between
				63.3kgs - 85.2kgs.
			</p>
		</div>
	);
};

export default BMIResult;

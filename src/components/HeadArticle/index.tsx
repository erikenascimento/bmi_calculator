import React from "react";
// css
import styles from "./HeadArticle.module.scss";
import Wrapper from "../Wrapper";

const HeadArticle = () => {
	return (
		<Wrapper tagKind="section">
			<article data-testid="headArticle" className={styles.headArticle}>
				<h1 data-testid="articleHeading">Body Mass Index Calculator</h1>
				<p data-testid="articleParagraph">
					Better understand your weight in relation to your height using our
					body mass index (BM) calculator. While BMI is not the sole determinant
					of a healthy weight, it offers a valuable starting point to evaluate
					your overall health and well-being.
				</p>
			</article>
		</Wrapper>
	);
};

export default HeadArticle;

import React from "react";
// css
import styles from "./CalculatorBox.module.scss";
// Custom components
import Wrapper from "../Wrapper";

const CalculatorBox: React.FC = () => {
	return (
		<Wrapper data-testid="calculatorWrapper" tagKind="section">
			<section data-testid="calculatorBox" className={styles.calculatorBox}>
				CalculatorBox
			</section>
			;
		</Wrapper>
	);
};

export default CalculatorBox;

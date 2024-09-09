import React from "react";
// css
import styles from "./CalculatorBox.module.scss";
// Custom components
import Wrapper from "../Wrapper";
import InputRadio from "./InputRadio";

const CalculatorBox: React.FC = () => {
	return (
		<Wrapper data-testid="calculatorWrapper" tagKind="section">
			<section data-testid="calculatorBox" className={styles.calculatorBox}>
				<h2 className={styles.calculatorBox__heading}>
					Enter your details below
				</h2>
				<div className={styles.calculatorBox__unitsDiv}>
					<div className={styles.calculatorBox__unitsDiv__unit}>
						<InputRadio />
						<span className={styles.calculatorBox__unitsDiv__unit__type}>
							Metric
						</span>
					</div>
					<div className={styles.calculatorBox__unitsDiv__unit}>
						<InputRadio />
						<span className={styles.calculatorBox__unitsDiv__unit__type}>
							Imperial
						</span>
					</div>
				</div>
			</section>
		</Wrapper>
	);
};

export default CalculatorBox;

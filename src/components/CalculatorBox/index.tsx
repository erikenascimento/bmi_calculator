import React from "react";
// css
import styles from "./CalculatorBox.module.scss";
// Custom components
import Wrapper from "../Wrapper";
import InputRadio from "./InputRadio";
import InputMeasure from "./InputMeasure";
import BMIResult from "../BMIResult";

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
				<div className={styles.calculatorBox__inputDiv}>
					<label
						htmlFor="height"
						className={styles.calculatorBox__inputDiv__label}
					>
						Height
					</label>
					<InputMeasure unit="cm" label="height" min={50} max={300} />
				</div>
				<div className={styles.calculatorBox__inputDiv}>
					<label
						htmlFor="weight"
						className={styles.calculatorBox__inputDiv__label}
					>
						Weight
					</label>
					<InputMeasure unit="kg" label="weight" min={20} max={700} />
				</div>
				<BMIResult />
			</section>
		</Wrapper>
	);
};

export default CalculatorBox;

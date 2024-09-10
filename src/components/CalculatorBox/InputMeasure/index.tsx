import React from "react";
// css
import styles from "./InputMeasure.module.scss";

interface IInputMeasure {
	unit: string;
	label?: string;
	min: number;
	max: number;
}

const InputMeasure: React.FC<IInputMeasure> = ({ unit, label, min, max }) => {
	return (
		<div className={styles.inputDiv}>
			<input
				name={label}
				type="number"
				data-testid="inputMeasure"
				min={min}
				max={max}
				maxLength={3}
				pattern="\d{3}"
				inputMode="numeric"
				className={styles.inputDiv__inputMeasure}
				placeholder="0"
			/>
			<span className={styles.inputDiv__unit}>{unit}</span>
		</div>
	);
};

export default InputMeasure;

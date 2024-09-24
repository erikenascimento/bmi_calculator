import React from "react";
// css
import styles from "./InputRadio.module.scss";

interface IRadioProps {
	checked?: boolean;
}

const InputRadio: React.FC<IRadioProps> = ({ checked }) => {
	return (
		<input
			type="radio"
			className={styles.inputRadio}
			data-testid="inputRadio"
			name="selectedUnit"
		/>
	);
};

export default InputRadio;

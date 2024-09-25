import React from "react";
// css
import styles from "./InputRadio.module.scss";

interface IRadioProps {
	checked?: boolean;
	onChange: () => void;
}

const InputRadio: React.FC<IRadioProps> = ({ checked, onChange }) => {
	return (
		<input
			type="radio"
			className={styles.inputRadio}
			data-testid="inputRadio"
			name="selectedUnit"
			onChange={onChange}
		/>
	);
};

export default InputRadio;

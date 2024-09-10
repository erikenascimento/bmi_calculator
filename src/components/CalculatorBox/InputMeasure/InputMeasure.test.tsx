import React from "react";
// Testing libraries
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import InputMeasure from ".";
// Custom components

describe("Check if the InputMeasure component", () => {
	test("renders properly and has a data-testid", () => {
		render(<InputMeasure unit="cm" min={50} max={300} />);

		const inputRadio = screen.getByTestId("inputMeasure");
		expect(inputRadio).toBeDefined();
	});
});

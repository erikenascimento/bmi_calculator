import React from "react";
// Test libraries
import { describe, expect, test, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
// Custom components
import CalculatorBox from ".";

describe("Testing if the CalculatorBox component", () => {
	// beforeAll is used to avoid multiple rendering for each test
	beforeAll(() => {
		render(<CalculatorBox />);
	});

	test("renders properly", () => {
		const calculatorBox = screen.getByTestId("calculatorBox");
		expect(calculatorBox).toBeDefined();
	});
});

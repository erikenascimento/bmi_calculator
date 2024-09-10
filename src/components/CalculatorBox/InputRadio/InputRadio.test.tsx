import React from "react";
// Testing libraries
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import InputRadio from ".";
// Custom components

describe("Check if the InputRadio component", () => {
	test("renders properly", () => {
		render(<InputRadio />);

		const inputRadio = screen.getByTestId("inputRadio");
		expect(inputRadio).toBeDefined();
	});
});

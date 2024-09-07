import React from "react";
// Testing libraries
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
// Custom components
import SvgLogo from ".";

describe("Checking if the SVG component", () => {
	test("is properly rendering", () => {
		render(<SvgLogo />);
		expect(screen.getByTestId("SvgLogo")).toBeDefined();
	});
});

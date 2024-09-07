import React from "react";
// Testing libraries
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
// Custom components
import SvgLogo from ".";

describe("Svg", () => {
	test("renders", () => {
		render(<SvgLogo />);
		expect(screen.getByTestId("SvgLogo")).toBeDefined();
	});
});

import React from "react";
// Testing libraries
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
// Custom components
import SvgLogo from ".";

describe("Testing if the accessibility of the svg logo", () => {
	test("has the correct role and alt text", () => {
		render(<SvgLogo />);

		const svgLogo = screen.getByTestId("SvgLogo");

		expect(svgLogo.getAttribute("role")).toBe("img");
		expect(svgLogo.getAttribute("aria-label")).toBeDefined();
	});
});

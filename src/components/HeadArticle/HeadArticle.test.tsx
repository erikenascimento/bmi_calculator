import React from "react";
// Test libraries
import { describe, expect, test, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
// Custom components
import HeadArticle from ".";

describe("Testing if the HeadArticle component", () => {
	// beforeAll is used to avoid multiple rendering for each test
	beforeAll(() => {
		render(<HeadArticle />);
	});

	test("renders properly", () => {
		const headArticle = screen.getByTestId("headArticle");
		expect(headArticle).toBeDefined();
	});

	test("contains a heading", () => {
		const heading = screen.getByTestId("articleHeading");
		expect(heading).toBeDefined();
	});

	test("contains a paragraph", () => {
		const paragraph = screen.getByTestId("articleParagraph");
		expect(paragraph).toBeDefined();
	});
});

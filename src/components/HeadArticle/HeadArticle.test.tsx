import React from "react";
// Test libraries
import { describe, expect, test, beforeAll } from "vitest";
import { render, screen } from "@testing-library/react";
// Custom components
import MainContent from ".";

describe("Testing if the MainContent component", () => {
	// beforeAll is used to avoid multiple rendering for each test
	beforeAll(() => {
		render(<MainContent />);
	});

	test("renders properly", () => {
		const mainContent = screen.getByTestId("headArticle");
		expect(mainContent).toBeDefined();
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

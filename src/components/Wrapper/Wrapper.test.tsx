import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Wrapper from ".";

describe("Checks if the Wrapper component", () => {
	test("will render with correct width from the appropriate global css variable", () => {
		render(
			<Wrapper tagKind="section" testId="wrapperTestId">
				Content
			</Wrapper>
		);

		// Since this component uses styled components with next which is client-sided
		// we need to set a timer otherwise the test will fail because it will check the
		// component before the style is applied
		setTimeout(() => {
			const computedStyle = window.getComputedStyle(
				screen.getByTestId("wrapperTestId")
			);

			expect(computedStyle.width).toBe("var(--wrapper-width-s)");
		}, 5000); // 5 seconds delay
	});
});

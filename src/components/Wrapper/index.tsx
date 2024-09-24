"use client";

import React from "react";
// React libraries
import styled from "styled-components";

interface IWrapperrops {
	tagKind: keyof JSX.IntrinsicElements; // This types tagKind is a valid HTML tag
	children?: React.ReactNode; // Allow any valid React children
	testId?: string;
}

// The idea here is to change the html tag of this component dynamically based on props
// for that we type the div as the tagKind prop via keyof
const StyledWrapper = styled.div<{ as?: keyof JSX.IntrinsicElements }>`
	width: var(--wrapper-width-s);
`;

const Wrapper: React.FC<IWrapperrops> = ({ tagKind, children, testId }) => {
	// This will use the prop to define the tag type
	const Tag = tagKind as keyof JSX.IntrinsicElements;

	return (
		<StyledWrapper as={Tag} data-testid={testId}>
			{children}
		</StyledWrapper>
	);
};
export default Wrapper;

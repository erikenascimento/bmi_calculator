import React from "react";
// css
import styles from "./page.module.scss";
// Custom components
import SvgLogo from "@/components/SvgLogo";
import HeadArticle from "@/components/HeadArticle";

export default function HomePage() {
	return (
		<body className={styles.homePage}>
			<header className={styles.homePage__header}>
				<SvgLogo />
				<HeadArticle />
			</header>
		</body>
	);
}

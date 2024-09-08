import React from "react";
// css
import styles from "./page.module.scss";
// Custom components
import SvgLogo from "@/components/SvgLogo";
import HeadArticle from "@/components/HeadArticle";

export default function HomePage() {
	return (
		<section className={styles.homePage}>
			<SvgLogo />
			<HeadArticle />
		</section>
	);
}

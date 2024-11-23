import { useTranslation } from "react-i18next"
import type { MetaFunction } from "react-router"

export const meta: MetaFunction = () => {
	return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }]
}

export default function Index() {
	const { t } = useTranslation()
	return (
		<div className="placeholder-index relative h-full min-h-screen w-screen dark:bg-white sm:pb-16 sm:pt-8">
			<div className="w-full text-center text-2xl mt-4">{t("hi")}</div>
			<section className="absolute bottom-1 mb-2 w-full pb-1 pt-2 text-center sm:bottom-2 sm:pb-3 md:mb-0 md:mt-0">
				Crafted with ❤️
			</section>
		</div>
	)
}

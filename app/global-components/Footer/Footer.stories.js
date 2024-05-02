import Footer from "./Footer";

export default {
	title: "Global Components/Footer",
	component: Footer,
	decorators: [
		(Story) => (
			<div className="container">
				{/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
				<Story />
			</div>
		),
	],
};

export const FooterElement = {
	render: function Render(args) {
		return <Footer {...args}></Footer>;
	},
};

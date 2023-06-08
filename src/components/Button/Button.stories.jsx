import Button from './Button';

export default {
	title: 'Common/Button',
	component: Button,
	argTypes: {
		color: {
			options: ['primary', 'default', 'danger'],
			control: { type: 'select' },
		},
		size: {
			options: ['sm', 'base', 'lg'],
			control: { type: 'select' },
		},
		backgroundColor: {
			control: { type: 'color' },
		},
	},
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Default',
};

export const Danger = Template.bind({});
Danger.args = {
	children: 'Danger',
	color: 'danger',
};

export const Primary = Template.bind({});
Primary.args = {
	children: 'Primary',
	color: 'primary',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
	children: 'Primary Small',
	color: 'primary',
	size: 'sm',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
	...PrimarySmall.args,
	children: 'Primary Large',
	size: 'lg',
};

// export const PrimaryLarge = () => (
// 	<Button color='primary' size='lg'>
// 		Primary
// 	</Button>
// );

import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button } from './Button';
import { userEvent, within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

/**
 * Button Component
 */

export default {
	title: 'Common/Button',
	component: Button,
	tags: ['autodocs'],
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
		handleClick: {
			action: true,
		},
	},
};

const something = action('something');

// const Template = (args) => {
// 	// const handleClick = (e) => {
// 	// 	something(e, 'test');
// 	// };
// 	return <Button {...args} handleClick={linkTo('Common/Button', 'Danger')} />;
// };

const Template = (args) => {
	// const handleClick = (e) => {
	// 	something(e, 'test');
	// };
	return <Button {...args} />;
};

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
Primary.parameters = {
	backgrounds: {
		values: [
			{ name: 'red', value: '#f00' },
			{ name: 'green', value: '#0f0' },
			{ name: 'blue', value: '#00f' },
		],
	},
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
PrimaryLarge.play = async ({ args, canvasElement }) => {
	const canvas = within(canvasElement);
	await userEvent.click(canvas.getByRole('button'));
};

// export const PrimaryLarge = () => (
// 	<Button color='primary' size='lg'>
// 		Primary
// 	</Button>
// );

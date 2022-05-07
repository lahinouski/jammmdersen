import { Button } from '../Components';

export default {
  title: 'Button',
  component: Button
}

const Template = (args) => <Button {...args} />;

export const Coral = Template.bind({});
Coral.args = { backgroundColor: 'coral', label: 'GO' };
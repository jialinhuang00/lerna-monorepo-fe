import type { Meta, StoryObj } from '@storybook/react';
import { Page } from './Page';
import { within, userEvent } from '@storybook/testing-library';

const meta: Meta<typeof Page> = {
  title: 'Example/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Page>;

export const LoggedOut: Story = {
  args: {
    onLogin: () => console.log('onLogin'),
    onLogout: () => console.log('onLogout'),
    onCreateAccount: () => console.log('onCreateAccount'),
  },
};

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
    onLogin: () => console.log('onLogin'),
    onLogout: () => console.log('onLogout'),
    onCreateAccount: () => console.log('onCreateAccount'),
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const loginButton = await canvas.getByRole('button', { name: /Log in/i });
    await userEvent.click(loginButton);
  },
}; 
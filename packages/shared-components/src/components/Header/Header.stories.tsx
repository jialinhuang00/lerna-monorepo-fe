import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Example/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
    onLogin: () => console.log('onLogin'),
    onLogout: () => console.log('onLogout'),
    onCreateAccount: () => console.log('onCreateAccount'),
  },
};

export const LoggedOut: Story = {
  args: {
    onLogin: () => console.log('onLogin'),
    onLogout: () => console.log('onLogout'),
    onCreateAccount: () => console.log('onCreateAccount'),
  },
}; 
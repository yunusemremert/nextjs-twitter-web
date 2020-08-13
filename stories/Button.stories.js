import React from 'react'

import Button from '../components/button'
import NavigationButton from '../components/navigation-button'
import Navigation from '../components/navigation'

export default {
  title: 'Example/Buttons'
}

export const Default = () => <Button>Save</Button>

export const NavButton = () => <NavigationButton>Save</NavigationButton>

export const Nav = () => <Navigation />

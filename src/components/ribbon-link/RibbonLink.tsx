import React, { HTMLProps } from 'react';
import classNames from 'classnames';
import { Icons } from 'nhsuk-react-components';
import Bar from './components/Bar';

type RibbonFlavours = 'hot' | 'mild' | 'cool';

interface RibbonProps extends HTMLProps<HTMLButtonElement> {
  flavour: RibbonFlavours;
  type?: 'button' | 'submit' | 'reset';
}

interface RibbonLink extends React.FC<RibbonProps> {
  Bar: React.FC<HTMLProps<HTMLDivElement>>;
}

const RibbonLink: RibbonLink = ({ children, flavour, className, ...rest }) => (
  <button
    className={classNames('nhsuk-ribbon-link', `nhsuk-ribbon-link--${flavour}`, className)}
    type="button"
    {...rest}
  >
    <Icons.ArrowRightCircle className="nhsuk-ribbon-link__icon" />
    {children}
  </button>
);

RibbonLink.Bar = Bar;

export default RibbonLink;

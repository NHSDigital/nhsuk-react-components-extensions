import classNames from 'classnames';
import React, { HTMLProps } from 'react';
import { Col, ColProps, Row } from 'react-flexbox-grid';

declare type TabProps = {
  isActive?: boolean;
  isDisabled?: boolean;
  isEmpty?: boolean;
  autosize?: boolean;
  xs?: string;
  sm?: string;
  md?: string;
  lg?: string;
  xl?: string;
};

const Tab: React.FC<HTMLProps<HTMLSpanElement> & ColProps & TabProps> = ({
  children,
  className,
  isActive,
  isDisabled,
  isEmpty,
  autosize,
  xs,
  sm,
  md,
  lg,
  xl,
  ...rest
}) => (
  <Col
    className={classNames(
      `nhsuk-tab-set__tab${
        // eslint-disable-next-line no-nested-ternary
        isDisabled ? '--disabled' : isActive ? '--active' : isEmpty ? '--empty' : ''
      }`,
      className,
    )}
    {...(autosize
      ? {}
      : {
        xs,
        sm,
        md,
        lg,
        xl,
      })}
  >
    {!isEmpty ? <span {...rest}>{children}</span> : null}
  </Col>
);

interface TabSet extends React.FC<HTMLProps<HTMLDivElement>> {
  Tab: React.FC<HTMLProps<HTMLSpanElement> & ColProps & TabProps>;
}

const TabSet: TabSet = ({ children, className, ...rest }) => (
  <div className={classNames('nhsuk-tab-set', className)} {...rest}>
    <Row>{children}</Row>
  </div>
);

TabSet.Tab = Tab;
export default TabSet;

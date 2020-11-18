import React, { HTMLProps } from 'react';
import classNames from 'classnames';

interface Timeline extends React.FC<HTMLProps<HTMLDivElement>> {
  
}

const Timeline: Timeline = ({ className, ...rest }) => (
  <div className={classNames('nhsuk-timeline', className)} {...rest} />
);



export default Timeline;

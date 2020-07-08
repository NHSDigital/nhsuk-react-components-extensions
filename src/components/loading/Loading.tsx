import React, { HTMLProps } from 'react';

interface Props extends HTMLProps<HTMLDivElement> {
  text?: string;
}

const Loading: React.FC<Props> = ({ text, ...rest }: Props) => (
  <div {...rest}>
    <div className="nhsuk-loader__container">
      <p className="nhsuk-heading-l">{text}</p>
    </div>

    <div className="nhsuk-loader__container">
      <div className="nhsuk-loader" />
    </div>
  </div>
);

Loading.defaultProps = {
  text: 'Loading...',
};

export default Loading;

import React, { HTMLProps } from 'react';
import { Panel } from 'nhsuk-react-components';

interface Props extends HTMLProps<HTMLDivElement> {
  text?: string | false;
  backdrop?: boolean;
  shown?: boolean;
}

const Loading: React.FC<Props> = ({ backdrop, shown, text, width, height }) => {
  if (!shown) return null;

  const baseSpinner = (
    <Panel className="nhsuk-loader__panel" style={{ minWidth: width, minHeight: height }}>
      <div style={{ width, minHeight: height }} className="nhsuk-loader" />
      {text && <p className="nhsuk-heading-l nhsuk-loader__text">{text}</p>}
    </Panel>
  );

  return backdrop ? <div className="nhsuk-loader__backdrop">{baseSpinner}</div> : baseSpinner;
};

Loading.defaultProps = {
  text: 'Loading...',
  width: 200,
  height: 200,
  shown: true,
  backdrop: true,
};

export default Loading;

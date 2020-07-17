import React, { useState, useEffect } from 'react';
import { storiesOf } from '@storybook/react';
import { Loading } from '../src';

const stories = storiesOf('Loading spinner', module);

stories
  .add('Basic', () => <Loading />)
  .add('With custom text', () => <Loading text="Loading patients" />)
  .add('Without text', () => <Loading text={false} />)
  .add('Without backdrop', () => <Loading backdrop={false} />)
  .add('With custom sizing', () => <Loading width={100} height={100} text={false} />)
  .add('With programmatic control', () => {
    const [isShown, setIsShown] = useState<boolean>(true);

    useEffect(() => {
      const timeout = setTimeout(() => setIsShown(!isShown), 3000);
      return () => clearTimeout(timeout);
    }, [isShown]);

    return <Loading shown={isShown} />;
  });

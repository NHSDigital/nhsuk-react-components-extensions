/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Timeline } from '../src';
import Tag from '../src/components/tag/Tag';
import { EventProps } from '../src/components/timeline/components/Event';

const stories = storiesOf('Timeline', module);

const actionStyle = {
  marginLeft: '8px',
  color: '#768692',
};
const tagStyle = {
  marginLeft: '8px',
};
const linkStyle = {
  marginLeft: '8px',
  fontWeight: 400,
};

const storybookEvents: EventProps[] = [
  {
    title: <>Result sent</>,
    instigator: <>System</>,
    date: '19 Nov 2019, 7:49:10 pm',
    description: [
      <>Test Result: (39S) Low-grade dyskaryosis, HPV positive, Repeat Advised</>,
      <>Test Date: 19-Oct-2020, 9:00:00 am</>,
    ],
    action: (
      <span style={actionStyle}>
        -
        <Tag style={tagStyle} color="yellow">
          Send to printer
        </Tag>
        <a style={linkStyle} href="/placeholder/">
          Cancel
        </a>
      </span>
    ),
  },
  {
    title: <>Patient deferred</>,
    instigator: <>James Smith</>,
    date: '19 Nov 2019, 4:28:57 pm',
    description: [
      <>Defer Reason: Pregnancy</>,
      <>CRM Case Number: CAS-12345-ABCDE</>,
      <>Comments: Requested via the GP form</>,
    ],
  },
  {
    title: <>Next test due date changed</>,
    instigator: <>System</>,
    date: '19 Nov 2019, 11:59:59 am',
    description: [<>Next test due date changed to 10-Oct-2021</>],
  },
  {
    title: <>Test result added</>,
    instigator: <>System (Edifax)</>,
    date: '19 Nov 2019, 9:12:42 am',
    description: [<>Test Result: (39S) Low-grade dyskaryosis, HPV positive, Repeat Advised</>],
  },
  {
    title: <>Screening invitation sent</>,
    instigator: <>System</>,
    date: '18 Nov 2019, 7:49:10 pm',
    action: (
      <span className="nhsuk-timeline__action">
        -
        <Tag className="nhsuk-timeline__tag" color="grey">
          Sent to patient
        </Tag>
        <a className="nhsuk-timeline__link" href="/placeholder2">
          Resend
        </a>
      </span>
    ),
  },
];

stories.add('Standard', () => <Timeline events={storybookEvents} />);

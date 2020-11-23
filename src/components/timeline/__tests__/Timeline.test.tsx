import React from 'react';
import { shallow } from 'enzyme';
import Timeline from '../Timeline';
import Event from '../components/Event';
import Tag from '../../tag/Tag';

const actionLinkText = 'Cancel';

const testEvents = [
  {
    title: 'Result sent',
    instigator: 'System',
    date: new Date('2019-11-19 19:49:10'),
    description: [
      'Test Result: (39S) Low-grade dyskaryosis, HPV positive, Repeat Advised',
      'Test Date: 19-Oct-2020, 9:00:00 am',
    ],
    action: (
      <span className="nhsuk-timeline__action">
        -
        <Tag className="nhsuk-timeline__tag" color="yellow">
          Send to printer
        </Tag>
        <a className="nhsuk-timeline__link" href="/placeholder/">
          {actionLinkText}
        </a>
      </span>
    ),
  },
  {
    title: 'Patient deferred',
    instigator: 'James Smith',
    date: new Date('2019-11-19 16:28:57'),
    description: [
      'Defer Reason: Pregnancy',
      'CRM Case Number: CAS-12345-ABCDE',
      'Comments: Requested via the GP form',
    ],
  },
  {
    title: 'Next test due date changed',
    instigator: 'System',
    date: new Date('2019-11-19 11:59:59'),
    description: ['Next test due date changed to 10-Oct-2021'],
  },
  {
    title: 'Test result added',
    instigator: 'System (Edifax)',
    date: new Date('2019-11-19 09:12:42'),
    description: ['Test Result: (39S) Low-grade dyskaryosis, HPV positive, Repeat Advised'],
  },
  {
    title: 'Screening invitation sent',
    instigator: 'System',
    date: new Date('2019-11-18 19:49:10'),
    action: (
      <span className="nhsuk-timeline__action">
        -
        <Tag className="nhsuk-timeline__tag" color="grey">
          Sent to patient
        </Tag>
        <a className="nhsuk-timeline__link" href="/placeholder/">
          Resend
        </a>
      </span>
    ),
  },
];

describe('Timeline', () => {
  it('matches snapshot', () => {
    const timeline = shallow(<Timeline events={testEvents} />);

    expect(timeline).toMatchSnapshot();

    timeline.unmount();
  });

  it('should have correct classes applied', () => {
    const timeline = shallow(<Timeline events={testEvents} />);

    expect(timeline.hasClass('nhsuk-timeline')).toBeTruthy();

    timeline.unmount();
  });

  describe('Event', () => {
    it('matches snapshot', () => {
      const event = shallow(<Event {...testEvents[0]} />);

      expect(event).toMatchSnapshot();

      event.unmount();
    });

    it('should have correct classes applied', () => {
      const event = shallow(<Event {...testEvents[0]} />);

      expect(event.hasClass('nhsuk-timeline__event')).toBeTruthy();

      event.unmount();
    });

    it('should have correct title', () => {
      const event = shallow(<Event {...testEvents[1]} />);

      expect(event.find('.nhsuk-timeline__title').text()).toBe('Patient deferred by James Smith');

      event.unmount();
    });

    it('should have correct instigator', () => {
      const event = shallow(<Event {...testEvents[0]} />);

      expect(event.find('.nhsuk-timeline__by').text()).toBe(` by ${testEvents[0].instigator}`);

      event.unmount();
    });

    it('should have correct date', () => {
      const event = shallow(<Event {...testEvents[0]} />);

      const dateOptions = {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      };

      expect(event.find('.nhsuk-timeline__date time').text()).toBe(
        testEvents[0].date.toLocaleString('en-GB', dateOptions),
      );

      event.unmount();
    });

    it('has correct link text if action data is present', () => {
      const event = shallow(<Event {...testEvents[0]} />);

      expect(event.find('.nhsuk-timeline__link').text()).toBe(actionLinkText);
    });
  });
});

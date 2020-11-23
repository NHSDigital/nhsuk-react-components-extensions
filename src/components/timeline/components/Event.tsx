import React, { ReactNode } from 'react';

export interface EventProps {
  title: ReactNode;
  instigator: ReactNode;
  date: Date;
  description?: Array<ReactNode>;
  action?: ReactNode;
}

const dateOptions = {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  hour12: true,
};

const Event: React.FC<EventProps> = ({ title, instigator, date, description = [], action }) => (
  <div className="nhsuk-timeline__event nhsuk-u-margin-bottom-2">
    <h2 className="nhsuk-timeline__title">
      <span className="nhsuk-timeline__status">{title}</span>
      <span className="nhsuk-timeline__by"> by {instigator}</span>
      {action}
    </h2>
    <p className="nhsuk-timeline__date">
      <time dateTime={date.toString()}>{date.toLocaleString('en-GB', dateOptions)}</time>
    </p>
    {description.map((descriptionItem, index) => (
      <p key={index.toString()} className="nhsuk-timeline__description-item">
        {descriptionItem}
      </p>
    ))}
  </div>
);

export default Event;

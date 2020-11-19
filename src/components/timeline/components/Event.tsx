import React from 'react';
import Tag, { TagProps } from '../../tag/Tag';

export interface EventProps {
  title: string;
  instigator: string;
  date: Date;
  description?: Array<string>;
  action?: {
    status: string;
    tagColor: TagProps['color'];
    linkText: string;
    actionLink: string;
  };
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
      {title}
      <span className="nhsuk-timeline__by"> by {instigator}</span>
      {action && (
        <span className="nhsuk-timeline__action">
          -
          <Tag className="nhsuk-timeline__tag" color={action.tagColor}>
            {action.status}
          </Tag>
          <a className="nhsuk-timeline__link" href={action.actionLink}>
            {action.linkText}
          </a>
        </span>
      )}
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

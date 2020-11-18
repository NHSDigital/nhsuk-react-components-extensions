import React, { HTMLProps } from 'react';

export interface EventProps extends HTMLProps<HTMLDetailsElement> {
  title: string;
  instigator: string;
  date: Date;
  description: Array<string>;
}

const Event: React.FC<EventProps> = ({ 
    title,
    instigator,
    date,
    description,
    }) =>  (
        <div className="nhsuk-timeline__item nhsuk-u-margin-bottom-2">
            <h2 className="nhsuk-timeline__title">{title}</h2>  
            <p className="nhsuk-timeline__by"> by {instigator}</p>
            <p className="nhsuk-timeline__date">
                {date.toString()}
            </p>
            {
                description.map( (descriptionItem, index) => (
                    <p key={index} className= "nhsuk-timeline__description-item">{descriptionItem}</p>
                    )
                )
            }    
        </div>
    )

export default Event;

import React from 'react';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Tags', module);

stories.add('Cervical Screening', () => {
  return (
    <div className="tag-demo">
      <span className="nhsuk-tag">Standard</span>
      <span className="nhsuk-tag">Done</span>
      <span className="nhsuk-tag nhsuk-tag--white"> Started </span>
      <span className="nhsuk-tag nhsuk-tag--grey"> Not Started </span>
      <span className="nhsuk-tag nhsuk-tag--blue"> Ready to submit </span>
      <span className="nhsuk-tag nhsuk-tag--red"> FP69 </span>
      <span className="nhsuk-tag nhsuk-tag--orange"> Ceased - no cervix </span>
    </div>
  );
}).add('Colours', () => {
  return (
    <div className="tag-demo">
      <span className="nhsuk-tag">Standard</span>
      <span className="nhsuk-tag nhsuk-tag--white"> Started </span>
      <span className="nhsuk-tag nhsuk-tag--grey"> Not Started </span>
      <span className="nhsuk-tag nhsuk-tag--green"> New </span>
      <span className="nhsuk-tag nhsuk-tag--aqua-green"> Active </span>
      <span className="nhsuk-tag nhsuk-tag--blue"> Pending </span>
      <span className="nhsuk-tag nhsuk-tag--purple"> Received </span>
      <span className="nhsuk-tag nhsuk-tag--pink"> Sent </span>
      <span className="nhsuk-tag nhsuk-tag--red"> Rejected </span>
      <span className="nhsuk-tag nhsuk-tag--orange"> Declined </span>
      <span className="nhsuk-tag nhsuk-tag--yellow"> Delayed </span>
    </div>
  );
});

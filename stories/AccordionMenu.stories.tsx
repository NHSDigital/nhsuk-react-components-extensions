/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { AccordionMenu } from '../src';

const stories = storiesOf('Accordion Menu', module);

stories
  .add('Standard', () => (
    <AccordionMenu className="accordion-demo">
      <AccordionMenu.Section heading="Greetings!">
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
      </AccordionMenu.Section>
      <AccordionMenu.Section heading="Salutations!">
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
      </AccordionMenu.Section>
      <AccordionMenu.Section heading="Greetings!">
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
      </AccordionMenu.Section>
      <AccordionMenu.Section heading="Salutations!">
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
      </AccordionMenu.Section>
    </AccordionMenu>
  ))
  .add('With defaultOpen', () => (
    <AccordionMenu className="accordion-demo">
      <AccordionMenu.Section heading="Greetings!" defaultOpen>
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
      </AccordionMenu.Section>
      <AccordionMenu.Section heading="Salutations!">
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
      </AccordionMenu.Section>
      <AccordionMenu.Section heading="Greetings!">
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
        <AccordionMenu.Link>Hello!</AccordionMenu.Link>
      </AccordionMenu.Section>
      <AccordionMenu.Section heading="Salutations!">
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
        <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
      </AccordionMenu.Section>
    </AccordionMenu>
  ))
  .add('Programmatic Control', () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
      <>
        <label htmlFor="open-accordion">
          <input type="checkbox" id="open-accordion" onChange={e => setIsOpen(e.target.checked)} />
          Open Accordion Section
        </label>

        <AccordionMenu className="accordion-demo">
          <AccordionMenu.Section heading="Greetings!" open={isOpen}>
            <AccordionMenu.Link>Hello!</AccordionMenu.Link>
            <AccordionMenu.Link>Hello!</AccordionMenu.Link>
          </AccordionMenu.Section>
          <AccordionMenu.Section heading="Salutations!">
            <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
            <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
          </AccordionMenu.Section>
          <AccordionMenu.Section heading="Greetings!">
            <AccordionMenu.Link>Hello!</AccordionMenu.Link>
            <AccordionMenu.Link>Hello!</AccordionMenu.Link>
          </AccordionMenu.Section>
          <AccordionMenu.Section heading="Salutations!">
            <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
            <AccordionMenu.Link>Goodbye!</AccordionMenu.Link>
          </AccordionMenu.Section>
        </AccordionMenu>
      </>
    );
  });

import React, { HTMLProps } from 'react';
import { render } from '@testing-library/react';
import FormGroup, { FormGroupProps } from '../LocalFormGroup';

type InputProps = HTMLProps<HTMLInputElement> & { error?: boolean };
type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

const renderFormGroupComponent = ({
  children = (props) => <input {...props} />,
  ...rest
}: Optional<FormGroupProps<InputProps>, 'children'>) =>
  render(<FormGroup<InputProps> {...rest}>{children}</FormGroup>);

describe('FormGroup', () => {
  it('matches snapshot', () => {
    const { container } = renderFormGroupComponent({ inputType: 'input', id: 'testId' });

    expect(container).toMatchSnapshot();
  });

  it('generates a random ID for the input', () => {
    let renderProps;
    renderFormGroupComponent({
      inputType: 'input',
      children: (props) => {
        renderProps = props;
        return <input {...props} />;
      },
    });

    expect(renderProps).not.toBe(null);
    expect(renderProps!.id).toHaveLength(11);
    expect(renderProps!.id).toContain('input');
  });

  it('allows passing of custom IDs', () => {
    let renderProps;
    renderFormGroupComponent({
      inputType: 'input',
      id: 'TestID2ElectricBoogaloo',
      children: (props) => {
        renderProps = props;
        return <input {...props} />;
      },
    });

    expect(renderProps).not.toBe(null);
    expect(renderProps!.id).toBe('TestID2ElectricBoogaloo');
  });

  it('passes correct props for hint (generated id)', () => {
    let renderProps;
    const { container } = renderFormGroupComponent({
      inputType: 'input',
      hint: 'This is a test hint',
      children: (props) => {
        renderProps = props;
        return <input {...props} />;
      },
    });

    expect(renderProps).not.toBe(null);
    expect(renderProps!.id).toHaveLength(11);
    expect(renderProps!.id).toContain('input');

    expect(container.querySelector('input')?.getAttribute('aria-describedby')).toBe(
      `${renderProps!.id}--hint`,
    );
    expect(container.querySelector('.nhsuk-hint')?.getAttribute('id')).toBe(
      `${renderProps!.id}--hint`,
    );
  });

  it('passes correct props for hint (custom id)', () => {
    let renderProps;
    const { container } = renderFormGroupComponent({
      inputType: 'input',
      hint: 'This is a test hint',
      id: 'testID',
      children: (props) => {
        renderProps = props;
        return <input {...props} />;
      },
    });

    expect(renderProps).not.toBe(null);
    expect(renderProps!.id).toBe('testID');

    expect(container.querySelector('input')?.getAttribute('aria-describedby')).toBe('testID--hint');
    expect(container.querySelector('.nhsuk-hint')?.getAttribute('id')).toBe('testID--hint');
  });

  it('passes correct props for label (generated id)', () => {
    let renderProps;
    const { container } = renderFormGroupComponent({
      inputType: 'input',
      label: 'This is a test label',
      children: (props) => {
        renderProps = props;
        return <input {...props} />;
      },
    });

    expect(renderProps).not.toBe(null);
    expect(renderProps!.id).toHaveLength(11);
    expect(renderProps!.id).toContain('input');

    expect(container.querySelector('.nhsuk-label')?.getAttribute('id')).toBe(
      `${renderProps!.id}--label`,
    );
    expect(container.querySelector('.nhsuk-label')?.getAttribute('for')).toBe(renderProps!.id);
  });

  it('passes correct props for label (custom id)', () => {
    let renderProps;
    const { container } = renderFormGroupComponent({
      inputType: 'input',
      label: 'This is a test label',
      labelProps: { title: 'TestTitle' },
      id: 'testID',
      children: (props) => {
        renderProps = props;
        return <input {...props} />;
      },
    });

    expect(renderProps).not.toBe(null);
    expect(renderProps!.id).toBe('testID');

    expect(container.querySelector('.nhsuk-label')?.getAttribute('id')).toBe('testID--label');
    expect(container.querySelector('.nhsuk-label')?.getAttribute('for')).toBe('testID');
    expect(container.querySelector('.nhsuk-label')?.textContent).toBe('This is a test label');
    expect(container.querySelector('.nhsuk-label')?.getAttribute('title')).toBe('TestTitle');
  });

  it('passes correct props for error (generated id)', () => {
    let renderProps;
    const { container } = renderFormGroupComponent({
      inputType: 'input',
      error: 'This is a test error',
      errorProps: { title: 'TestTitle' },
      children: (props) => {
        renderProps = props;
        return <input {...props} />;
      },
    });

    expect(renderProps).not.toBe(null);
    expect(renderProps!.id).toHaveLength(11);
    expect(renderProps!.id).toContain('input');
    expect(renderProps!['aria-describedby']).toBe(`${renderProps!.id}--error-message`);

    expect(container.querySelector('.nhsuk-error-message')?.getAttribute('id')).toBe(
      `${renderProps!.id}--error-message`,
    );
    expect(container.querySelector('.nhsuk-error-message')?.textContent).toBe(
      'Error: This is a test error',
    );
    expect(container.querySelector('.nhsuk-error-message')?.getAttribute('title')).toBe(
      'TestTitle',
    );
  });

  it('passes correct props for error (custom id)', () => {
    let renderProps;
    const { container } = renderFormGroupComponent({
      inputType: 'input',
      error: 'This is a test error',
      errorProps: { title: 'TestTitle' },
      id: 'testID',
      children: (props) => {
        renderProps = props;
        return <input {...props} />;
      },
    });

    expect(renderProps).not.toBe(null);
    expect(renderProps!.id).toBe('testID');
    expect(renderProps!['aria-describedby']).toBe(`testID--error-message`);


    expect(container.querySelector('.nhsuk-error-message')?.getAttribute('id')).toBe(
      'testID--error-message',
    );
    expect(container.querySelector('.nhsuk-error-message')?.textContent).toBe(
      'Error: This is a test error',
    );
    expect(container.querySelector('.nhsuk-error-message')?.getAttribute('title')).toBe(
      'TestTitle',
    );
  });

  describe('applies the correct classes when errored', () => {
    it('string component', () => {
      const { container } = renderFormGroupComponent({
        inputType: 'input',
        error: "Oh no there's an error!",
         
        children: ({ error, ...rest }) => <input {...rest} />,
      });

      expect(container.querySelector('div.nhsuk-form-group')?.classList).toContain(
        'nhsuk-form-group--error',
      );
      expect(container.querySelector('.nhsuk-error-message')).toBeTruthy();
      expect(container.querySelector('.nhsuk-error-message')?.textContent).toBe(
        "Error: Oh no there's an error!",
      );
    });

    it('boolean component', () => {
      const { container } = renderFormGroupComponent({
        inputType: 'input',
        error: true,
         
        children: ({ error, ...rest }) => <input {...rest} />,
      });

      expect(container.querySelector('div.nhsuk-form-group')?.classList).toContain(
        'nhsuk-form-group--error',
      );
      expect(container.querySelector('.nhsuk-error-message')).toBeFalsy();
    });
  });

  it('should add hint ID and error ID to the aria-describedby of the input', () => {
    const { container } = renderFormGroupComponent({
      inputType: 'input',
      id: 'error-and-hint',
      error: 'This is an error',
      hint: 'This is a hint',
       
      children: ({ error, ...rest }) => <input {...rest} />,
    });

    const inputElement = container.querySelector('input');
    expect(inputElement).not.toBeNull();
    expect(inputElement?.getAttribute('aria-describedby')).toBe('error-and-hint--hint error-and-hint--error-message');
  })

  it('should have no aria-describedby when there is no hint or label', () => {
    const { container } = renderFormGroupComponent({
      inputType: 'input',
       
      children: ({ error, ...rest }) => <input {...rest} />,
    });

    const inputElement = container.querySelector('input');
    expect(inputElement).not.toBeNull();

    expect(inputElement?.getAttribute('aria-describedby')).toBe(null);
  });
});

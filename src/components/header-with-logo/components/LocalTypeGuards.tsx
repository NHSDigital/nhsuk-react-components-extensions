import { FC, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

/**
 * Assert that a child item is of the given component type.
 */

// 3933 - this is the older version
// declare const childIsOfComponentType: (child: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined, component: FC) => child is ReactPortal | ReactElement<any, string | JSXElementConstructor<any>>;

// export default childIsOfComponentType


/**
 * Assert that a child item is of the given component type.
 */
export const childIsOfComponentType = (
    child:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | null
      | undefined,
    component: FC,
  ): child is
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ReactPortal =>
    child !== undefined &&
    child !== null &&
    typeof child === 'object' &&
    'type' in child &&
    child.type === component;
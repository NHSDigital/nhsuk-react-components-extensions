
import  {
    ReactNode,
    ReactElement,
    ComponentType,
    isValidElement,
} from 'react';


export function childIsOfComponentType<P>(
    child: ReactNode,
    component: ComponentType<P>
): child is ReactElement<P> {
    return isValidElement<P>(child) && child.type === component;
}

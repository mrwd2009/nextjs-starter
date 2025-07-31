import { Container, injectable, inject } from 'inversify';
import { IocComponentIdStore } from './ioc-types';

let iocContainer: Container | null = null;

export function initIocContainer(container: Container): void {
  iocContainer = container;
}

export const Component = injectable;
export const Qualifier = inject;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iocComponentIdStore: IocComponentIdStore = {} as any;

export const IOC_ID_STORE = iocComponentIdStore;

export function registerIocComponent<ComponentType>(
  componentName: keyof IocComponentIdStore,
  component: ComponentType,
): void {
  if (!iocContainer) {
    throw new Error('IOC container not initialized');
  }
  if (componentName in iocComponentIdStore) {
    throw new Error(`Component ${componentName} already registered`);
  }
  const id = Symbol.for(componentName);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (iocComponentIdStore as any)[componentName] = id;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  iocContainer.bind<ComponentType>(id).to(component as any);
}

export function registerIocDynamicValueComponent(
  componentName: keyof IocComponentIdStore,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getVal: () => any,
) {
  if (!iocContainer) {
    throw new Error('IOC container not initialized');
  }
  if (componentName in iocComponentIdStore) {
    throw new Error(`Component ${componentName} already registered`);
  }
  const id = Symbol.for(componentName);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (iocComponentIdStore as any)[componentName] = id;
  iocContainer.bind(id).toDynamicValue(getVal);
}

export function getIocComponent<ComponentType>(
  componentName: keyof IocComponentIdStore,
): ComponentType {
  if (!iocContainer) {
    throw new Error('IOC container not initialized');
  }
  return iocContainer.get(iocComponentIdStore[componentName]);
}

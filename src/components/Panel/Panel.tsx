import { FC, memo, ReactNode } from 'react';
import { Card, CardProps, TabsProps } from 'antd';
import type { CardTabListType } from 'antd/lib/card';
import classNames from 'classnames';

interface Props {
  title?: ReactNode;
  extra?: ReactNode;
  loading?: boolean;
  children?: ReactNode;
  tabList?: CardTabListType[];
  className?: string;
  onTabChange?: (key: string) => void;
  activeTabKey?: string;
  defaultActiveTabKey?: string;
  tabProps?: TabsProps;
  styles?: CardProps['styles'];
}

const Panel: FC<Props> = ({ children, className, tabProps = {}, ...restProps }) => {
  return (
    <div className="app-ex-panel">
      <Card
        {...restProps}
        variant="borderless"
        size="small"
        className={classNames(className, 'app-ex-panel__card', { 'no-tabs': !restProps.tabList })}
        tabProps={{ size: 'small', tabBarGutter: 16, ...tabProps }}
      >
        {children}
      </Card>
    </div>
  );
};

export default memo(Panel);

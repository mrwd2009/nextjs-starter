'use client';
import CollapsibleSplitPane from '@/components/CollapsibleSplitPane';
import Panel from '@/components/Panel';
import { useSavedSiderWidth } from '@/hooks';
import { FC } from 'react';

const BillingCenter: FC = () => {
  const siderWidth = useSavedSiderWidth('app-pp-billing-center-left-sider-width', '280px');
  return (
    <CollapsibleSplitPane
      leftSider={{
        content: <Panel>Organization List</Panel>,
        initialWidth: siderWidth.initialWidth,
      }}
      title="Billing Center"
    >
      <Panel>Invoice Table</Panel>
    </CollapsibleSplitPane>
  );
};

export default BillingCenter;

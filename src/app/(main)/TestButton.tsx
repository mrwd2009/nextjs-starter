'use client';
// import { showWarning } from '@/lib/antd-static-tools';
import { Button } from 'antd';
// import { getServiceInfo } from '../actions';
import { useTRPC } from '@/hooks';
import { useQuery } from '@tanstack/react-query';
import { FC, ReactNode, useState } from 'react';

export const TestButton: FC<{ children: ReactNode }> = ({ children }) => {
  const trpc = useTRPC();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const result = useQuery(trpc.billingOperation.getBillingInvoiceList.queryOptions('test'));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const result2 = useQuery(trpc.billingOperation.getBillingReportList.queryOptions('test22'));
  const [visible, setVisible] = useState(false);
  console.log(visible);
  return (
    <>
      <Button
        onClick={async () => {
          setVisible(!visible);
          // showWarning('This is a warning');
          // try {
          //   const res = await getServiceInfo();
          //   console.log(res);
          // } catch (error) {
          //   console.log(error);
          // }
        }}
      >
        Click me
      </Button>
      {visible ? children : 'Loading...'}
    </>
  );
};

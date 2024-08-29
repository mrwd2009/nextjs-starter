'use client';
import { showConfirm } from '@/client/lib/antd-static-tools';
import trpc from '@/client/store/services/trpc';
import { Button } from 'antd';

export default function ClientContent() {
  const data = trpc.emailBuilder.emailTemplateList.useQuery('test');
  console.log(data);
  return (
    <Button
      type="primary"
      onClick={() => {
        showConfirm({
          title: 'test',
          content: 'test',
          onConfirm: () => {},
        });
      }}
    >
      Button
    </Button>
  );
}

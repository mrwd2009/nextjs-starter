'use client';
import { showConfirm } from '@/lib/antd-static-tools';
import { Button } from 'antd';

export default function ClientContent() {
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

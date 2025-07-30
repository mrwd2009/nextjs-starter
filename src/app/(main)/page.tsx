import { Card } from 'antd';
import { TestButton } from './TestButton';
import TestServer from './TestServer';

export default function Home() {
  return (
    <div>
      <div className="bg-primary text-primary-foreground px-10 font-bold">Test Tailwind</div>
      <div className="bg-amber-400 px-10 text-blue-600">
        <Card title="Card Title">
          Content of the card
          <TestButton>
            <TestServer />
          </TestButton>
        </Card>
      </div>
    </div>
  );
}

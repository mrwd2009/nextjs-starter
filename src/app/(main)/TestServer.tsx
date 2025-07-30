const TestServer = async () => {
  console.log('TestServer');
  await new Promise((resolve) => setTimeout(resolve, 14000));
  return (
    <div>
      <h1>Test Server</h1>
    </div>
  );
};

export default TestServer;

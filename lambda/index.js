exports.handler = async (event) => {
  const environment = process.env.ENV || 'default';
  const reason = process.env.REASON || 'default';
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello World from ${environment} with reason ${reason}` }),
  };
};

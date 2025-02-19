exports.handler = async (event) => {
    const environment = process.env.ENV || "unknown";
    const reason = process.env.REASON || "no reason provided";

    return {
        statusCode: 200,
        body: JSON.stringify({ message: `Hello World from ${environment} with reason ${reason}` }),
    };
};

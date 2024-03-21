import "../loadEnvironment";
import chalk from "chalk";
import Debug from "debug";
import app from ".";

const debug = Debug("wheelHub:server:startServer");

const startServer = (port: number) =>
  new Promise((resolve, reject) => {
    const server = app.listen(port, () => {
      debug(chalk.green(`Server listening on http://localhost:${port}`));
      resolve(true);
    });

    server.on("error", (error) => {
      debug(chalk.red("Error starting the server"));
      if (error.message.includes("EADDRINUSE")) {
        debug(chalk.red(`Port ${port} in use`));
      }
      reject(error);
    });
  });

export default startServer;

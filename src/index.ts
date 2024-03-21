import "./loadEnvironment";
import startServer from "./server/startServer";

const port = +process.env.PORT || 8080;

(async () => {
  try {
    await startServer(port);
  } catch (error) {
    process.exit(1);
  }
})();

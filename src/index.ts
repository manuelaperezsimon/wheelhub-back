import "./loadEnvironment";
import startServer from "./server/startServer";
import { connectDB } from "./database/data-source";

const port = +process.env.PORT || 8080;

(async () => {
  try {
    await connectDB();
    await startServer(port);
  } catch (error) {
    process.exit(1);
  }
})();

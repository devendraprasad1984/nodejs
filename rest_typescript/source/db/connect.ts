import mongoose from "mongoose";
import config from "../config/default";
import log from "../config/simpleLogger";

function connect() {
    const dbUri: string = config.dbUri;

    return mongoose
        .connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            log.info("Database connected");
        })
        .catch((error) => {
            log.error("db error", error);
            process.exit(1);
        });
}

export default connect;
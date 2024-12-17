import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import hpp from "hpp";
import morgan from "morgan";

export const applyAppMiddlewares = (app: express.Application) => {
  // Enable morgan logging
  app.use(morgan("short"));

  // Enable trust proxy to support X-Forwarded-For header
  app.set("trust proxy", true);

  // Secure the app by setting various HTTP headers
  app.use(helmet());

  // Allow requests to be sent from the client
  app.use(cors({ credentials: true, origin: "".split(",") }));

  // Limit repeated requests to public APIs and/or endpoints such as password reset
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 800, // limit each IP to 100 requests per windowMs
      message: "Too many requests from this IP, please try again after 15 minutes",
      // Custom key generator to limit requests based on IP address
      keyGenerator: (request, _response): string => {
        if (!request.ip) {
          console.error("Warning: request.ip is missing!");
          return request.socket.remoteAddress || "unknown";
        }

        return request.ip.replace(/:\d+[^:]*$/, "");
      },
    }),
  );

  // Body parser, reading data from body into req.body
  app.use(bodyParser.json({ limit: "2MB" }));

  // Prevent parameter pollution
  app.use(hpp({ whitelist: [] }));
};

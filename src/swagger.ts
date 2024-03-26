import swaggerJSDoc from "swagger-jsdoc";
import path from "path";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "WheelHub API Documentation",
      version: "1.0.0",
    },
    servers: [{ url: "http://localhost:8080" }],
    components: {
      schemas: {
        User: {
          type: "object",
          properties: {
            username: { type: "string" },
            password: { type: "string" },
            clue: { type: "string" },
          },
          required: ["username", "password"],
        },
      },
    },
    paths: {
      "/users/create": {
        post: {
          summary: "Create a new user",
          tags: ["User"],
          requestBody: {
            required: true,
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/User",
                },
              },
            },
          },
          responses: {
            200: {
              description: "The user was successfully created",
            },
            409: {
              description: "Error creating new user",
            },
            500: {
              description: "Some server error",
            },
          },
        },
      },
    },
  },

  apis: ["./routes/userRouter.ts"],
};

const swaggerSpecifications = swaggerJSDoc(options);

export default swaggerSpecifications;

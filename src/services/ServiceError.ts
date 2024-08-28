export class ServiceError extends Error {
  constructor(
    public readonly message: string,
    public readonly statusCode: number = 500,
    public readonly name: string = "ServiceError",
  ) {
    super(message);
  }
}

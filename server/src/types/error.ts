export class ErrorWithStatusCode extends Error {
  code: number;

  constructor(code: number, message?: string) {
    super(message || "Something went wrong");
    this.code = code;

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, ErrorWithStatusCode.prototype);
  }
}

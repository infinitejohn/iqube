function identity<T>(arg: T): T {
    return arg;
  }
  
  const strIdentity: string = identity("TypeScript");
  const numIdentity: number = identity(42);
  
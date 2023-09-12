type Person = {
    name: string;
    age: number;
  };
  
  type OptionalPerson = {
    [K in keyof Person]?: Person[K];
  };
  
  
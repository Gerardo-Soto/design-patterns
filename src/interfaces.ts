// all classes that implement this interface, most use strict this props and methods:
// in an interface, all most be public.

export interface Driver {
  database: string;
  password: string;
  port: number;

  // public methods:
  connect(): boolean;
  disconnect(): boolean;
  isConnected(name: string): boolean;
}

// using an interface with objects:
/*const myDriver: Driver = {
  database: '',
  password: '',
  port: 23
}*/

// using an interface with objects:
class PostgresDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: 3066,
    public username: string,
  ) {}

  connect(): boolean { return true }
  disconnect(): boolean { return true  }
  isConnected(username : string): boolean { return true  }
}

export class OracleDriver implements Driver{
  constructor(
    public database: string,
    public password: string,
    public port: 4567,
  ) {}

  connect(): boolean { return true }
  disconnect(): boolean { return true }
  isConnected(name: string): boolean { return true }
}

/** STEP 1 */
class HttpAdapter {
  constructor(type) {
    this._type = type;
  }
  get() {
    throw new Error('Method not implemented')
  }
  post() {
    throw new Error('Method not implemented')
  }
  put() {
    throw new Error('Method not implemented')
  }
  delete() {
    throw new Error('Method not implemented')
  }
  getType() {
    return this._type;
  }
}

class Express extends HttpAdapter {
  constructor() {
    super('Express');
  }
  get() {
    console.log(`get Method for ${this._type} adapter`);
  }
  post() {
    console.log(`post Method for ${this._type} adapter`);
  }
  put() {
    console.log(`put Method for ${this._type} adapter`);
  }
  delete() {
    console.log(`delete Method for ${this._type} adapter`);
  }
}
class NestJs extends HttpAdapter {
  constructor() {
    super('NestJs');
  }
  get() {
    console.log(`get Method for ${this._type} adapter`);
  }
  post() {
    console.log(`post Method for ${this._type} adapter`);
  }
  put() {
    console.log(`put Method for ${this._type} adapter`);
  }
  delete() {
    console.log(`delete Method for ${this._type} adapter`);
  }
}

class HttpAdapterFactory {
  makeAdapter() {
    throw new Error('Method not implement')
  }
}

class ExpressFactory extends HttpAdapterFactory {
  makeAdapter() {
    return new Express();
  }
}

class NestJsFactory extends HttpAdapterFactory {
  makeAdapter() {
    return new NestJs();
  }
}

function appAdapter (adapter) {
  const httpAdapter = adapter.makeAdapter()
  httpAdapter.get();
  httpAdapter.post();
  httpAdapter.put();
  httpAdapter.delete();
  console.log(httpAdapter.getType())
}

function createAdapter(type) {
  const adapters = {
    'express': ExpressFactory,
    'nestjs': NestJsFactory
  }

  const Adapters = adapters[type]
  return new Adapters()
}

appAdapter(createAdapter('express'))
appAdapter(createAdapter('nestjs'))

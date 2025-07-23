const v1 = [Symbol,Symbol];
const o2 = {
};
Object.defineProperty(o2, "get", { writable: true, configurable: true, enumerable: true, value: Symbol });
const v4 = new Proxy(v1, o2);
v4.values;
gc();

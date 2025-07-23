const v1 = new WeakSet();
Object.defineProperty(v1, 3878, { configurable: true, enumerable: true, get: Array, set: Array });
const o3 = {
};
const v5 = new Proxy(v1, o3);
v5[3878] = v5;
gc();

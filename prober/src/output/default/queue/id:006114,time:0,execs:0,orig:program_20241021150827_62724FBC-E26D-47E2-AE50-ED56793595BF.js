const v5 = 10 == 128 ? 10 : 128;
const v6 = new Int32Array(1000);
Object.defineProperty(v6, 128, { writable: true, configurable: true, value: v5 });
gc();

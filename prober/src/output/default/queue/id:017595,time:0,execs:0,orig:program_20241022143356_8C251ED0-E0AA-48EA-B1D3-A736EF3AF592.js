Object.defineProperty(Int16Array, 0, { writable: true, enumerable: true, value: 12 });
const v2 = new Int16Array(Int16Array);
const t2 = createGlobalObject().Float16Array;
new t2(v2);
gc();

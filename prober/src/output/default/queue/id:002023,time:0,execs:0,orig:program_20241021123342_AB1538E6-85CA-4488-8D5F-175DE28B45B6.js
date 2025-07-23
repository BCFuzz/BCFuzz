const v2 = new Uint16Array(257);
const v4 = new Uint32Array(257, 257, 257);
const o5 = {
};
let v7 = new Proxy(Uint32Array, o5);
const v10 = [++v7];
Reflect.apply(v4.lastIndexOf, v2, v10);
gc();

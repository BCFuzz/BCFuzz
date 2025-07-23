const v1 = new Uint16Array(Uint16Array, Uint16Array, Uint16Array);
const v3 = new Uint32Array(v1, Uint32Array);
Object.defineProperty(RegExp, "join", { value: v1 });
v3.toString.apply(RegExp);
gc();

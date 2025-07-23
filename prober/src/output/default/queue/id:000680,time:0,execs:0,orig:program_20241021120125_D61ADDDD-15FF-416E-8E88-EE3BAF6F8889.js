const v1 = new Uint32Array();
const v3 = new Int16Array(v1, Int16Array, v1);
Object.defineProperty(v3, "byteOffset", { value: v1 });
gc();

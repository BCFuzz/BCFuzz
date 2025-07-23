for (let v2 = 0; v2 < 100; v2++) {
    Object.defineProperty(Int16Array.__proto__, "e", { configurable: true, enumerable: true, set: ArrayBuffer });
}
const v5 = new Uint32Array(ArrayBuffer, Int16Array, ArrayBuffer);
v5.slice(ArrayBuffer, v5);
gc();

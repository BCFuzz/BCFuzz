for (let v2 = 0; v2 < 100; v2++) {
    Object.defineProperty(Int16Array.__proto__, "e", { configurable: true, enumerable: true, set: ArrayBuffer });
}
const v4 = new Int16Array(ArrayBuffer, Int16Array, Int16Array);
const v5 = v4.subarray(v4);
v5.slice(ArrayBuffer, v5);
gc();

for (let v2 = 0; v2 < 100; v2++) {
    Object.defineProperty(Int16Array.__proto__, "e", { configurable: true, enumerable: true, set: ArrayBuffer });
}
const v4 = new Int16Array();
v4.subarray(Int16Array, v4);
gc();

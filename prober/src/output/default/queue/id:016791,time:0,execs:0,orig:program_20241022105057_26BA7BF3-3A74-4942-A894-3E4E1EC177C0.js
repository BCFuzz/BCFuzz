function f0() {
}
const v2 = new Uint8ClampedArray(Uint8ClampedArray, f0, Uint8ClampedArray);
const o3 = {
    "deleteProperty": f0,
};
const v5 = new Proxy(v2, o3);
delete v5[1073741824];
gc();

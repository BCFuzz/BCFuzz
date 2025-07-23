const o2 = {
    "maxByteLength": 2580,
};
const v4 = new SharedArrayBuffer(2580, o2);
const v6 = new Uint8Array(v4);
function f7(a8) {
    return a8;
}
Object.defineProperty(v6, "constructor", { configurable: true, enumerable: true, value: f7 });
gc();

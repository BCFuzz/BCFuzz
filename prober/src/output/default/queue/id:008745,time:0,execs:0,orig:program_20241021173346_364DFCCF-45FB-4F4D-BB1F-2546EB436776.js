const v0 = [];
function f1() {
    return v0;
}
const o2 = {
    __proto__: v0,
};
const v5 = new Uint8Array(3730);
const v7 = new Uint8ClampedArray();
Object.defineProperty(v0, 15, { configurable: true, get: f1 });
new Uint8Array(...v7, ...v7, ...v5);
gc();

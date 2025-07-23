const v0 = [];
function f2() {
}
const o3 = {
    "set": f2,
};
const v5 = new Proxy(v0, o3);
try { v5.push(BigUint64Array); } catch (e) {}
gc();

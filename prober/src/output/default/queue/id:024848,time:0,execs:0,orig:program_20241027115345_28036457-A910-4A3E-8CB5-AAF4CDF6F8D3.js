const v0 = [];
const v3 = new Int32Array(681);
const o4 = {
    "get": Int32Array,
};
const v6 = new Proxy(v0, o4);
function f7(a8, a9, a10, a11) {
    const v13 = ([a9,a9]).toLocaleString(a11, v0);
    try { v13.includes(v6); } catch (e) {}
    return v0;
}
v3.map(f7);
gc();

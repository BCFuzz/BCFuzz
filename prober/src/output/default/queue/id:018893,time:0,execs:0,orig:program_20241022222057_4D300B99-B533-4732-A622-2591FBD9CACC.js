const o1 = {
    "get": RegExp,
};
const v3 = new Proxy(RegExp, o1);
let v4;
try { v4 = new v3(); } catch (e) {}
function F5(a7, a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    const v12 = new SharedArrayBuffer();
    const v14 = new DataView(v12);
    try { v14.getUint32(v14, v4); } catch (e) {}
}
new F5(v4, v4, v3, v3);
for (let i19 = 16, i20 = 16; -13369 < i20; i20--) {
}
gc();

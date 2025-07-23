function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
class C2 extends F0 {
}
const v3 = new C2();
function f4(a5, a6) {
    class C8 {
    }
    let v9;
    try { v9 = (-4294967296).lastIndexOf(); } catch (e) {}
    const v12 = new Int16Array(1880);
    for (const v13 in v12) {
    }
    const v15 = new Uint32Array(v3, 1880);
    v15[1041] = v9;
}
v3.constructor = f4;
const t18 = v3.constructor;
const v17 = new t18();
const v18 = v17.constructor;
new v18(F0, v17, v18, v18, v18);
gc();

const v3 = new Float64Array(129);
const v6 = new Uint32Array();
function f7(a8, a9, a10, a11) {
    const v12 = a10?.toString;
    try { v12(v12); } catch (e) {}
    const o14 = {
    };
    const t7 = [Uint32Array,Uint32Array];
    t7[2] = v6;
}
f7() === Uint8ClampedArray;
const v18 = new Uint8ClampedArray(v6, 129, 129);
const t12 = v18.constructor;
new t12(v3);
const v21 = new BigUint64Array();
class C22 {
    constructor(a24, a25, a26) {
        a24.from(v21);
    }
}
try { new C22(Float64Array); } catch (e) {}
for (let v29 = 0; v29 < 250; v29++) {
}
gc();

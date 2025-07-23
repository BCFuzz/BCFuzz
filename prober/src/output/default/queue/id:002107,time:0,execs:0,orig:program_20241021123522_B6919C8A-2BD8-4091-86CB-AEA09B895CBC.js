const v8 = new BigUint64Array();
function F13(a15) {
    if (!new.target) { throw 'must be called with new'; }
}
const v16 = new F13();
class C17 extends F13 {
}
const v18 = new C17();
const v19 = `
    const v20 = v16 <= v18;
    v20 ^ v20;
    const v24 = Math.cos();
    v24 * v24;
    let v26 = -534378043;
    v26++;
    v26 - 534378043;
`;
const v29 = v19?.substring;
try { v29(v8, Uint8ClampedArray); } catch (e) {}
eval(v19);
gc();

function f0() {
}
for (let i3 = -3, i4 = 10; i3 < i4; i4--) {
}
function F13(a15) {
    if (!new.target) { throw 'must be called with new'; }
}
const v16 = new F13();
class C17 extends F13 {
}
const v18 = new C17();
const v19 = `
    const v21 = [];
    const v22 = Reflect.construct(f0, v21);
    try { v22(v16, v21); } catch (e) {}
    const v27 = v16 <= v18;
    v27 && v27;
    const v29 = v27 ^ v27;
    v29 - v29;
    new Uint8ClampedArray(2055);
    ([-26506,-32957,-9007199254740992,-2005272752])["reverse"]();
    const v39 = Math.cos();
    Number.isNaN(v39);
    v39 * v39;
    let v43 = -534378043;
    const o44 = {
    };
    function f45() {
    }
    v43++;
    const v48 = new BigUint64Array(586);
    for (const v49 of v48) {
    }
`;
eval(v19);
gc();

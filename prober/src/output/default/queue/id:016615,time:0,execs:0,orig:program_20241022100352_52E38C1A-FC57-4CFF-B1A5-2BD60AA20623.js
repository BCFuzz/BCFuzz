function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v2 = new F0();
const v4 = new Uint32Array();
let v6 = Set.__defineGetter__(v4, Uint32Array);
const v7 = v6--;
function F8(a10, a11, a12) {
    if (!new.target) { throw 'must be called with new'; }
    class C14 {
        constructor(a16, a17) {
            v2.has(a12, v7, [a16,a16], a12, C14);
        }
    }
    const v20 = -798.661461518094 && C14;
    v20 === v20;
    for (let v22 = 0; v22 < 250; v22++) {
    }
}
new F8();
gc();

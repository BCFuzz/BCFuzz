class C13 extends Uint8Array {
    constructor(a15, a16) {
        super();
        gc();
    }
}
new C13(Float32Array, Int32Array);
function f20() {
    return "isFrozen";
}
const v22 = f20.__defineGetter__;
try { v22(C13); } catch (e) {}
const v24 = `
    function f27() {
        const o28 = {
        };
        const v30 = Symbol.iterator;
        o28[v30] = f27;
        return v30;
    }
    const v31 = f27();
    try { BigUint64Array(v31); } catch (e) {}
`;
eval(v24);
gc();

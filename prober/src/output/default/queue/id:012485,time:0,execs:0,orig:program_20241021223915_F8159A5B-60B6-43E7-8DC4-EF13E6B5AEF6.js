const o2 = {
};
const v3 = new ArrayBuffer();
function f4(a5) {
    return 7n;
}
v3.toString = f4;
try { new Uint16Array(v3, v3); } catch (e) {}
new Uint16Array();
for (const v12 of [-1000000.0,-977966.8678253988,0.5899305666694178,Infinity,-9.873805875681943e+307,-1000000.0]) {
    v12 | v12;
    function F14(a16, a17, a18, a19) {
        if (!new.target) { throw 'must be called with new'; }
        const v21 = [];
        v21.toString = Symbol;
        for (let v22 = 0; v22 < 5; v22++) {
            v22 % v22;
            class C24 {
                [v21] = v22;
            }
            const v25 = new C24();
            v25.constructor;
            new C24();
            const v28 = new C24();
            v28.toLocaleString();
        }
    }
    new F14();
}
const o32 = {
};
gc();

function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6(a7) {
        const o10 = {
            "maxByteLength": 2312845920,
        };
        new ArrayBuffer(750704325, o10);
        return a2;
    }
    f6(a3);
    f6(F0);
    f6(F0);
    for (let v16 = 0; v16 < 10; v16++) {
        const v18 = new Uint8Array();
        createGlobalObject().WebAssembly.compile(v18);
    }
}
const v23 = new F0(F0, F0, F0, F0);
const v24 = v23.constructor;
const v25 = new v24(F0, v24, v23);
const t20 = v25.constructor;
new t20();
gc();

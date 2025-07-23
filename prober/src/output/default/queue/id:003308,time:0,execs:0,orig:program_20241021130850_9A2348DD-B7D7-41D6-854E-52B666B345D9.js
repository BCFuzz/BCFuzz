function F0(a2, a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    function f6() {
    }
    class C7 {
        constructor(a9, a10) {
            for (let v11 = 0; v11 < 32; v11++) {
                this["p" + v11] = v11;
            }
        }
        8 = f6;
        #d;
        #e = f6;
    }
    new C7();
    new C7();
    new C7();
    new C7();
    const v20 = new Set([0.0,1000000000000.0,-1.7947497258565735e+308]);
    v20.union(v20);
    const o24 = {
        "maxByteLength": 3071283242,
    };
    new SharedArrayBuffer(1024, o24);
    const o28 = {
        "maxByteLength": 416,
    };
    new SharedArrayBuffer(116, o28);
}
new F0();
new F0();
new F0();
new F0();
gc();

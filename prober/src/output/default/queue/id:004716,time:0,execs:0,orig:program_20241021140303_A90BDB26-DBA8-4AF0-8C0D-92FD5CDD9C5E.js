function f0() {
    return f0;
}
class C1 extends f0 {
    constructor(a3, a4, a5, a6) {
        super();
        const o9 = {
            "maxByteLength": 129,
        };
        const v11 = new SharedArrayBuffer(3, o9);
        for (let v12 = 0; v12 < 100; v12++) {
        }
        new Int32Array(v11);
    }
}
const v15 = new C1();
new C1(C1, v15, f0, v15);
const v17 = [1000,4,-1847056420,-1376724988,-9223372036854775807,268435456];
const v18 = [1073741823,21692,-1852544003];
const v19 = [175532020,17704,-9007199254740990,1146384440,-363757876,39051];
function f20(a21, a22, a23, a24) {
    let v25;
    try { v25 = a22.flatMap(); } catch (e) {}
    [v25];
    class C27 {
        get c() {
        }
    }
    const v29 = new C27();
    const v32 = new BigUint64Array(586);
    for (const v33 of v32) {
        v29.c;
    }
    return a23;
}
f20(v18, v18);
f20();
f20(v17, v19);
gc();

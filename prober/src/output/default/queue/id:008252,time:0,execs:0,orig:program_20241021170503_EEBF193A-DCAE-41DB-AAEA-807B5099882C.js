const v2 = /a.xyz{0,1}r+/dvs;
const v3 = /a\nW/vgi;
function f4(a5, a6, a7, a8) {
    a5.b = "getUint16";
    const v10 = (1.7976931348623157e+308).toString().link(f4);
    const v12 = new Int32Array(a7, a5, a8);
    for (const v13 in a5) {
        for (let v14 = 0; v14 < 5; v14++) {
            v12[v13] = v14;
        }
    }
    for (const v15 of v10) {
    }
    const o21 = {
        "d": a5,
        n(a17, a18, a19) {
            return a18;
        },
        get stack() {
            return Int32Array;
        },
    };
    return v10;
}
f4(v3);
f4(v2);
gc();

const v1 = [-4096,255,8,268435456,-9223372036854775807,4,1978198554];
function F2() {
    if (!new.target) { throw 'must be called with new'; }
}
const v4 = new F2();
const v8 = `
    const v10 = new Map();
    const v11 = v10.has;
    let v12;
    try { v12 = v11(); } catch (e) {}
    function f13() {
        return v11;
    }
    const v16 = new Float32Array(7);
    for (let v17 = 0; v17 < 5; v17++) {
        ("p" + v17).codePointAt.call(v1);
    }
    const v23 = new Float64Array(128);
    try { v23.findLast(1024); } catch (e) {}
    new Uint8Array(2165, v12, v16, v4);
    Int8Array[2] = Float64Array;
    Int8Array[2] = BigUint64Array;
    class C29 {
        static set e(a31) {
        }
        static get e() {
        }
        ["string"];
    }
    [-0.888876439764374,5.0,-31075.940693754004,0.0,-5.0,2.326945587547197,2.220446049250313e-16,-0.0,9.993763252577222e+307];
`;
eval(v8);
gc();

class C0 {
}
const v1 = new C0();
function f2(a3, a4) {
    const o10 = {
        toString(a6, a7, a8, a9) {
            return a3;
        },
    };
    return o10;
}
const v11 = f2(v1);
const v13 = new BigInt64Array();
try { v13.subarray(f2, v11); } catch (e) {}
gc();

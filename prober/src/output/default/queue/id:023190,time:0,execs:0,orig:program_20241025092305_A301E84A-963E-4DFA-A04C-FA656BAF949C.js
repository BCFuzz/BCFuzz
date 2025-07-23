const v1 = [1.218073230314916,-4.0,-2.5558447608748134e+305,-1e-15,-1000000.0,5.0,-1.0];
function F2(a4, a5, a6) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = a6;
}
const v7 = new F2(0.500027532756348, 0.500027532756348, v1);
const v10 = new Int32Array();
function f11(a12) {
    a12[Symbol.toPrimitive] = Date;
    const o15 = {
        62: v7,
        "g": a12,
        [f11]: v10,
    };
    return o15;
}
JSON.parse(JSON.stringify([f11(f11(f11)).g]));
for (let i25 = 0, i26 = 10; i25 < i26; i26--) {
}
gc();

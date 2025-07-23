const v0 = [NaN,2.2250738585072014e-308,-374221.57970375894,1e-15,3.5851154443711923];
function f1() {
    return v0;
}
const v4 = new Int32Array();
v4.toJSON = f1;
function f5(a6) {
    a6[Symbol.toPrimitive] = Date;
    const o9 = {
        "g": a6,
        [f5]: v4,
    };
    return o9;
}
JSON.parse(JSON.stringify([f5(f5(f5)).g]));
for (let i19 = 0, i20 = 10; i19 < i20; i20--) {
}
gc();

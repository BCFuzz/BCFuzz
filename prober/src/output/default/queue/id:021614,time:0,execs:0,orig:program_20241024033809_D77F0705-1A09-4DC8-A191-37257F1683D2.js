class C1 {
}
const v2 = new C1();
let v4;
try { v4 = Float32Array(); } catch (e) {}
function f6() {
    function f8() {
        for (let v9 = 0; v9 < 5; v9++) {
            [[v9],C1,1498532077,v2];
        }
        return f6;
    }
    const v12 = f8.apply(BigInt64Array, arguments);
    try { v12(v4); } catch (e) {}
}
f6();
for (let i17 = -3, i18 = 10; i18--, i17 < i18;) {
}
gc();

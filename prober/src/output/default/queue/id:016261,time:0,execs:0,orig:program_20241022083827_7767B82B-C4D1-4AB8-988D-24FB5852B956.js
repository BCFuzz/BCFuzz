function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
const v6 = new Uint8Array(3129);
for (const v7 in v6) {
    const o8 = {
    };
    function f9() {
        return arguments;
    }
    const v11 = f9();
    v2 | v7;
    v11 instanceof BigUint64Array;
}
gc();

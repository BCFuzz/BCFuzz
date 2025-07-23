function f0() {
    return f0;
}
class C3 extends f0 {
    static get d() {
        super.seal();
    }
    static get g() {
    }
    [10077] = 129;
}
const v7 = new C3();
v7[10077] = v7;
Uint8Array.length = Uint8Array;
const v10 = new Uint8Array(3129);
for (const v11 in v10) {
    const o12 = {
    };
    o12.h = o12;
    o12.g = o12;
    o12.g = v10;
    function f13() {
        return f13;
    }
}
gc();

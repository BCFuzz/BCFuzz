const v0 = [0.2823171093299658,397.5942152657765];
class C1 {
}
const v2 = new C1();
function f3() {
    const o6 = {
        __proto__: null,
        toString() {
            super.g = v0;
            return C1;
        },
    };
    const v8 = ("").repeat("");
    try { v8.substring(v8, o6); } catch (e) {}
    return v8;
}
v2.valueOf = f3;
for (let i12 = 0, i13 = 10; i12 !== i13; i13--) {
    for (let v20 = 0; v20 < 5; v20++) {
        v20 ^ v2;
    }
}
gc();

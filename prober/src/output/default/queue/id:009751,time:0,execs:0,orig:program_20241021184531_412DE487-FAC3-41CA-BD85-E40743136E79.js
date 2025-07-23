class C0 {
}
const v1 = new C0();
function f2() {
    const o5 = {
        __proto__: null,
        toString() {
            super.d |= null;
            return null;
        },
    };
    const v7 = ("").repeat(f2);
    try { v7.substring(v7, o5); } catch (e) {}
    return o5;
}
v1.valueOf = f2;
for (let i11 = 0, i12 = 10; i11 !== i12; i12--) {
    for (let v19 = 0; v19 < 5; v19++) {
        v19 ^ v1;
    }
}
gc();

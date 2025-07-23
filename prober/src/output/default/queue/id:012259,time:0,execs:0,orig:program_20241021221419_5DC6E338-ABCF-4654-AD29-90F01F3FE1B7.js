class C0 {
}
class C1 extends C0 {
}
const v3 = new Uint32Array(C0, C1);
const v4 = v3.constructor;
try { v4(); } catch (e) {}
for (let i8 = 0, i9 = 10; i8 < i9; i9--) {
}
for (let i = 0; i < 10; i++) {
    function f18(a19, a20, a21, a22) {
        const o23 = {
            __proto__: a21,
        };
        o23.e = o23;
        return o23;
    }
    const v25 = f18(2, "o", f18());
    v25.c = v25;
}
for (let v26 = 0; v26 < 10; v26++) {
    for (let v27 = 0; v27 < 25; v27++) {
    }
}
gc();

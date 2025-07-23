function f1(a2, a3, a4, a5) {
    return a2;
}
function f6() {
    const t4 = createGlobalObject().Float16Array;
    const v11 = new t4(536870912);
    return v11;
}
const v12 = f6();
const v13 = [v12,v12,v12];
const v14 = [v12];
function f17(a18, a19, a20, a21) {
    try { a21.forEach(f17); } catch (e) {}
    const o32 = {
        o(a24, a25, a26) {
            const v27 = a26.o;
            try { v27(v12, v12, -1316173556n); } catch (e) {}
            class C29 extends f6 {
            }
            new C29();
            new C29();
            return a24;
        },
    };
    o32.o(o32, o32, f1);
    o32.o(a18, a19, o32);
    return f17;
}
f17(v13, 4568n, v14, v14);
gc();

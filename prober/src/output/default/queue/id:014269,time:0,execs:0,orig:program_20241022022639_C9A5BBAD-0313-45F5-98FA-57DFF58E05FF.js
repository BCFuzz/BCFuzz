class C1 {
}
function f2() {
}
for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
for (let v13 = 0; v13 < 50; v13++) {
    const v14 = new C1();
    v14.constructor = f2;
    const v15 = new C1();
    const t10 = v15.constructor;
    new t10();
    class C18 {
        constructor(a20, a21) {
            a21.constructor();
            const v23 = a21.constructor();
            try { v23.bind(); } catch (e) {}
        }
    }
    new C18("flags", "flags");
    const v26 = new C18(v14, v14);
    Object.defineProperty(v26, "constructor", { configurable: true, enumerable: true, value: f2 });
    new C18(v15, v26);
}
gc();

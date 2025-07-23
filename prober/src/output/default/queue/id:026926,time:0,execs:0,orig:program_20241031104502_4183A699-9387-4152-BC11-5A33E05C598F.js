function f0(a1, a2, a3, a4) {
    return f0;
}
const v5 = f0(f0, f0, f0, f0);
const v8 = new Int8Array(255);
for (const v9 in v8) {
    class C10 {
        constructor(a12) {
            const v14 = `
                /\u{12345}/myvis;
                v5(Function, Int8Array, ...f0, Function);
            `;
            const v17 = v14.split(a12);
            v17.reverse(f0, a12, C10);
            try { v17.flatMap(Function); } catch (e) {}
        }
    }
    new C10(v9);
}
gc();

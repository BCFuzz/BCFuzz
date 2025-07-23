function f0(a1, a2, a3, a4) {
    return a2;
}
const v5 = f0();
const v8 = new Int8Array(255);
for (const v9 in v8) {
    class C10 {
        constructor(a12) {
            const v14 = `
                v5(Function, ...Int8Array, ...f0, Function);
            `;
            const v16 = v14.split(a12);
            v16.reverse();
            try { v16.flatMap(Function); } catch (e) {}
        }
    }
    new C10(v9);
}
gc();

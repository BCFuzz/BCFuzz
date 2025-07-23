const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                undefined(Function, Int8Array, .../\u{12345}/myvis);
            `;
            const v12 = v9.split(a7);
            v12.reverse();
            try { v12.flatMap(Function); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();

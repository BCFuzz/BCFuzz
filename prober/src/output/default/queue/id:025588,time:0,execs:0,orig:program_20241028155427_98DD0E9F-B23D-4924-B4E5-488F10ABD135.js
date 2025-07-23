const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function F9(a11, a12, a13) {
                    if (!new.target) { throw 'must be called with new'; }
                    let {"byteLength":v16,"byteOffset":v17,} = Int16Array(255);
                }
            `;
            const v18 = v8.split(a6);
            try { v18.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
for (let i23 = 0, i24 = 10; i23 < i24; i24--) {
}
gc();

const o0 = {
};
o0.b = o0;
for (const v1 in o0) {
    class C2 {
        constructor(a4) {
            const v6 = `
                const t7 = Int8Array(C2, a4);
                delete t7?.byteOffset;
                /\u{12345}/myvis;
            `;
            const v11 = v6.split(a4);
            for (let i14 = 0, i15 = 10; i15-- < i15;) {
            }
            try { v11.flatMap(eval); } catch (e) {}
        }
    }
    new C2(v1);
}
gc();

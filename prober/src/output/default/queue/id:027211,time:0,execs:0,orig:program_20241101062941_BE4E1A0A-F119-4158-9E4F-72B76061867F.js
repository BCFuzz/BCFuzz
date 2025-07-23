const o0 = {
};
o0.b = o0;
for (const v1 in o0) {
    class C2 {
        constructor(a4) {
            const v6 = `
                const t7 = Int8Array();
                delete t7?.byteOffset;
            `;
            const v10 = v6.split(a4);
            for (let i13 = 0, i14 = 10; i14-- < i14;) {
            }
            try { v10.flatMap(eval); } catch (e) {}
        }
    }
    new C2(v1);
}
gc();

const v1 = new Int16Array(Int16Array, Int16Array, Int16Array);
for (let i4 = 0, i5 = 10; i4 != i5; i5--) {
    for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
        const v22 = `
            async function* f23(a24, a25) {
                const v29 = (FinalizationRegistry >>> FinalizationRegistry) < 256;
                const v30 = !v29;
                try { v1.filter(a25, a25); } catch (e) {}
                function F32(a34, a35) {
                    if (!new.target) { throw 'must be called with new'; }
                }
                new F32(v29, v30);
                return a24;
            }
            f23();
        `;
        for (let i41 = 0, i42 = 10; i41 < i42; i42--) {
        }
        const v49 = eval(v22);
        v49.next(v49, i5, i15, v49, v49);
    }
}
gc();

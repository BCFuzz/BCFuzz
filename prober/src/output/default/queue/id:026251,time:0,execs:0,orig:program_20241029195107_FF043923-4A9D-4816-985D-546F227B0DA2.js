for (let i3 = 0, i4 = 10 + 10; i4--, i3 < i4;) {
}
for (let i14 = 0, i15 = 10; i14 < i15; i15--) {
}
const v23 = new Int8Array(255);
for (const v24 in v23) {
    class C25 {
        constructor(a27) {
            const v29 = `
                const v31 = ("").split(v24);
                try { v31.flatMap(C25); } catch (e) {}
            `;
            const v33 = v29.split(a27);
            v33.reverse(v24);
            try { v33.flatMap(eval); } catch (e) {}
        }
    }
    new C25(v24);
}
gc();

const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                let v9 = -12n;
                v9++ + "-14248";
            `;
            const v13 = v8.split(a6);
            for (let i16 = 0, i17 = 127; i16 < i17; i17--) {
            }
            v13.reverse();
            try { v13.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
gc();

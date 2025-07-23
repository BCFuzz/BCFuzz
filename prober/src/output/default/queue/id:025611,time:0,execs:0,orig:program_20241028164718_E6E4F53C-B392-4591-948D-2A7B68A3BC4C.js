const v2 = new Int8Array(255);
for (const v3 in v2) {
    class C4 {
        constructor(a6) {
            const v8 = `
                function F9(a11, a12, a13) {
                    if (!new.target) { throw 'must be called with new'; }
                    class C15 {
                        static a = -1.7976931348623157e+308;
                    }
                }
            `;
            const v16 = v8.split(a6);
            try { v16.flatMap(eval); } catch (e) {}
        }
    }
    new C4(v3);
}
for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
}
gc();

for (let i5 = 0, i6 = 10; i5 < i6; i6--) {
}
const v13 = new Int8Array(255);
for (const v14 in v13) {
    class C15 {
        constructor(a17) {
            for (let i21 = 0, i22 = 10; i21 < i22; i22--) {
            }
            const v29 = `
                function f30() {
                    const o31 = {
                        [Float32Array]: f30,
                    };
                    return a17;
                }
            `;
            const v32 = v29.split(a17);
            try { v32.flatMap(eval); } catch (e) {}
        }
    }
    new C15(v14);
}
gc();

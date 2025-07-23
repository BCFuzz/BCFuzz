function f0() {
    return f0;
}
const v1 = f0();
const v5 = new Int8Array(255);
for (const v6 in v5) {
    class C7 {
        constructor(a9) {
            const v11 = `
                const v12 = v1[f0];
                v12[166];
                function f14() {
                    class C15 extends Float32Array {
                        static #d = 255;
                    }
                    /\u{12345}/myvis;
                    return v12;
                }
            `;
            const v17 = v11.split(a9);
            try { v17.flatMap(eval); } catch (e) {}
        }
    }
    new C7(v6);
}
gc();

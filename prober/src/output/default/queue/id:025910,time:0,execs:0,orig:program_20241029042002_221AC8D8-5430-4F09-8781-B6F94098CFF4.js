const v1 = new Float32Array(Float32Array);
const v4 = new Int8Array(255);
for (const v5 in v4) {
    class C6 {
        constructor(a8) {
            const v10 = `
                /\u{12345}/myvis;
                switch (C6) {
                    case "boolean":
                        v4.__proto__ = v1;
                }
            `;
            const v13 = v10.split(a8);
            try { v13.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
gc();

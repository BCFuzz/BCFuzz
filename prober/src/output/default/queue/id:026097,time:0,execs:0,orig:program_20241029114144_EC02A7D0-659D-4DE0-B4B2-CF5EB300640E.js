const v1 = new BigInt64Array();
const v4 = new Int8Array(255);
for (const v5 in v4) {
    class C6 {
        constructor(a8) {
            const v10 = `
                with (v1) {
                    const o11 = {
                    };
                }
            `;
            const v12 = v10.split(a8);
            try { v12.flatMap(eval); } catch (e) {}
        }
    }
    new C6(v5);
}
gc();

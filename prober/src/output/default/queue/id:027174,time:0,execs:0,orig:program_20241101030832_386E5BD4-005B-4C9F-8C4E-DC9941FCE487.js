const v0 = [65537,-9223372036854775807,-1024,5,-536870912,-1073741824];
const v3 = new Int8Array(255);
for (const v4 in v3) {
    class C5 {
        constructor(a7) {
            const v9 = `
                /\u{12345}/myvis;
                class C11 {
                    [v0];
                }
            `;
            const v12 = v9.split(a7);
            v12.reverse(255, v4, v12);
            try { v12.flatMap(Function); } catch (e) {}
        }
    }
    new C5(v4);
}
gc();

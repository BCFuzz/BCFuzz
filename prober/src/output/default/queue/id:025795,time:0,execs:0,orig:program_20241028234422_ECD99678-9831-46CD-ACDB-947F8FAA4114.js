const v4 = WeakSet % +3;
const v7 = new Int8Array(255);
for (const v8 in v7) {
    class C9 {
        constructor(a11) {
            const v13 = `
                function f14() {
                    const o15 = {
                        [-9223372036854775808]: v4,
                    };
                    return f14;
                }
            `;
            const v16 = v13.split(a11);
            try { v16.flatMap(eval); } catch (e) {}
        }
    }
    new C9(v8);
}
gc();

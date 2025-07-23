const v1 = new Int8Array(Int8Array, Int8Array, Int8Array);
for (let i4 = 0, i5 = 10; i4 < i5; i5--) {
}
const v13 = new Int8Array(255);
for (const v14 in v13) {
    class C15 {
        constructor(a17) {
            const v19 = `
                class C20 {
                    constructor() {
                        delete v13[super[v1]];
                    }
                }
            `;
            const v24 = v19.split(a17);
            try { v24.flatMap(eval); } catch (e) {}
        }
    }
    new C15(v14);
}
gc();

const v1 = new Float32Array(Float32Array);
class C3 extends Int8Array {
    constructor(a5, a6) {
        const v7 = `
            const v9 = 45373n !== 45373n;
            class C10 {
            }
            const v11 = v9 !== C10;
            if (!v11) {
            }
            try { a6(v1, v11); } catch (e) {}
        `;
        eval(v7);
        super();
    }
}
new C3(Int8Array, Int8Array);
gc();

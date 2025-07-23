const v1 = new WeakSet();
Int16Array[2] = v1;
const v5 = new Int8Array(255);
for (const v6 in v5) {
    class C7 {
        constructor(a9) {
            function F11(a13, a14, a15) {
                if (!new.target) { throw 'must be called with new'; }
            }
            let v16 = new F11();
            const v17 = `
                ++v16;
            `;
            const v19 = v17.split(a9);
            try { v19.flatMap(eval); } catch (e) {}
        }
    }
    new C7(v6);
}
gc();

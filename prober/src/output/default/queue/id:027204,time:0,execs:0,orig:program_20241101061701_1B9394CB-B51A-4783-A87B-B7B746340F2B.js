const v0 = `
    async function* f1(a2, a3) {
        class C5 extends ArrayBuffer {
            m(a7, a8) {
                super.byteLength;
            }
        }
        const v10 = C5.prototype;
        try { v10.m(ArrayBuffer, ArrayBuffer, C5); } catch (e) {}
        return C5;
    }
    f1();
`;
const v14 = eval(v0);
v14.next(v14, v14, v0, v0);
gc();

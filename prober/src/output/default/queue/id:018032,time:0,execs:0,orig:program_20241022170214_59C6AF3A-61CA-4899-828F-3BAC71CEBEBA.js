const v2 = new Float32Array();
const v3 = `
    const v4 = new Uint8Array();
    class C5 extends Uint8Array {
        static {
            super[v2 + v4];
        }
    }
`;
eval(v3);
gc();

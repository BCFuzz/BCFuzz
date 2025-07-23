let v0 = undefined;
const v2 = new Uint8ClampedArray();
let v3 = `
    ({"b":v0,"byteLength":v0,"byteOffset":v3,} = v2);
    class C4 {
        #c;
        constructor(a6, a7) {
            a7.#c **= this;
        }
    }
`;
eval(v3);
gc();

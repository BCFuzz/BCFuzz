let v0 = undefined;
const v2 = new Uint8ClampedArray();
v2.lastIndexOf();
let v4 = `
    ({"b":v0,"byteLength":v0,"byteOffset":v4,} = v2);
    class C5 {
        #c;
        constructor(a7, a8) {
            a8.#c **= this;
        }
    }
    try { new C5(Uint8ClampedArray, v2); } catch (e) {}
`;
v4.toLocaleLowerCase();
eval(v4);
gc();

let v1 = undefined;
const v4 = new Int32Array();
const v5 = new Uint8ClampedArray(v4, v1, 722338082n);
let v6 = `
    ({"b":v1,"byteLength":v1,"byteOffset":v6,} = v5);
    class C7 {
        #c;
        constructor(a9, a10) {
            a10.#c **= this;
        }
    }
    try { new C7(C7, 722338082n); } catch (e) {}
    try { new C7(Uint8ClampedArray); } catch (e) {}
    function f13(a14) {
        return v4;
    }
    class C15 extends f13 {
    }
    new C15();
`;
eval(v6);
gc();

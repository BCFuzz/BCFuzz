const v1 = new Set();
const v2 = new Set();
const v4 = new BigInt64Array(v1, BigInt64Array, v1);
const v7 = `
    const t4 = "-13";
    t4[1] = "-13";
    const v9 = ("-13")[undefined];
    const o10 = {
    };
    function f11() {
        return v7;
    }
    const v12 = v4.buffer;
    try { v12.transfer(); } catch (e) {}
    /xyz{1,}?/myisu;
    /[^123]/dgiu;
    /(?<!)/miu;
    ~v2.size;
    function f19(a20) {
        return a20;
    }
    Object.defineProperty(o10, "h", { enumerable: true, get: f11, set: f19 });
    const o21 = {
    };
    o21.a = o21;
    o21.b = o21;
    const o22 = {
    };
    class C23 {
        127;
        static [v9];
        static [o10] = 512;
        e;
        static #a = v1;
        #o(a25) {
        }
    }
    function f26(a27, a28) {
        return a28;
    }
    const o29 = {
    };
    class C30 {
    }
    const v31 = C30?.constructor;
    const v32 = \`
    \`;
    v31.toString(v7, f19, v2, C30);
`;
eval(v7);
gc();

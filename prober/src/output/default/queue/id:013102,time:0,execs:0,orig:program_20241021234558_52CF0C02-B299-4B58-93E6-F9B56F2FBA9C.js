const v2 = new Uint32Array(128);
for (let v3 = 0; v3 < 5; v3++) {
    function F4(a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        class C9 {
            constructor(a11, a12) {
                arguments[0] = arguments;
                const v14 = v2[6];
                v14 % v14;
                v14 in arguments;
            }
        }
        new C9(a6);
    }
    const v18 = new F4(v3, F4, Uint32Array);
    const t15 = v18.constructor;
    new t15();
}
gc();

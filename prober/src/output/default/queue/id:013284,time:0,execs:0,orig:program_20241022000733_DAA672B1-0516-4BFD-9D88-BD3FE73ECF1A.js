const v2 = new Uint32Array(128);
for (let v3 = 0; v3 < 5; v3++) {
    function F4(a6, a7, a8) {
        if (!new.target) { throw 'must be called with new'; }
        class C9 {
            constructor(a11, a12) {
                this.toLocaleString();
                arguments[0] = arguments;
                const v15 = v2[6];
                v15 % v15;
                v15 in arguments;
            }
        }
        new C9(a8);
        new C9(a6);
    }
    new F4();
}
gc();

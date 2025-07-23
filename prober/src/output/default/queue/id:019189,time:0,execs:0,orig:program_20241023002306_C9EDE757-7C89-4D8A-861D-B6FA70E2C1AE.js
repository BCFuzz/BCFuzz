for (let v0 = 0; v0 < 5; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        Uint8ClampedArray.of();
        for (let v5 = 0; v5 < 50; v5++) {
            for (let i8 = -3, i9 = 10; i8 < i9; i9--) {
            }
            const v16 = /\p{gc=Nd}/mis;
            v16.test(v16);
        }
    }
    const v18 = new F1();
    const v19 = v18.constructor;
    new v19(F1, v19, v0, v0, v18);
}
gc();

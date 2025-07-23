const v0 = `
    async function* f1(a2, a3) {
        for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
        }
        for (let i16 = 0, i17 = 10; i17--, i17;) {
            const v23 = [-998652.9737568697,809.1708431813761,0.3060454231781444,0.826814220629717,0.5302106424711966,0.06586007802984883,0.0,-1.421539584953269e+308,-1000.0,2.1392270813840817];
            const v27 = new SharedArrayBuffer(56);
            const v29 = new BigInt64Array(v27);
            function f30(a31) {
                return v23 === 268435441;
            }
            v29[Symbol.toPrimitive] = f30;
            for (let v35 = 0; v35 < 5; v35++) {
                createGlobalObject().Atomics.waitAsync(v29, v35, v29);
            }
        }
        return a3;
    }
    f1(f1, f1);
`;
eval(v0).next();
gc();

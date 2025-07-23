for (let i2 = 0, i3 = 10;
    (() => {
        const v5 = [-998652.9737568697,809.1708431813761,0.3060454231781444,0.826814220629717,0.5302106424711966,0.06586007802984883,0.0,-1.421539584953269e+308,-1000.0,2.1392270813840817];
        const v9 = new SharedArrayBuffer(56);
        const v11 = new BigInt64Array(v9);
        function f12(a13) {
            return v5 === 268435441;
        }
        v11[Symbol.toPrimitive] = f12;
        for (let v17 = 0; v17 < 5; v17++) {
            createGlobalObject().Atomics.waitAsync(v11, v17, v11);
        }
        new SharedArrayBuffer(2147483648);
        return i2 < i3;
    })();
    (() => {
        for (let i28 = 0, i29 = 10; i28 != i29; i29--) {
        }
        i3--;
    })()) {
}
gc();

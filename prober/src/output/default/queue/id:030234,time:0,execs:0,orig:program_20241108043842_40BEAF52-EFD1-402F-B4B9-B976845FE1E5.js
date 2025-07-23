async function f0(a1, a2, a3) {
    function f4(a5, a6) {
        for (let i9 = 0, i10 = 10;
            (() => {
                const v11 = i9 < i10;
                for (let i15 = 0, i16 = 10 + 10; i16--, i16;) {
                }
                return v11;
            })();
            i10--) {
            Reflect.construct(BigInt64Array, [536870912]);
        }
        for (let i34 = 0, i35 = 10; i34 !== i35; i35--) {
        }
        const v42 = `
            const v43 = [-998652.9737568697,809.1708431813761,0.3060454231781444,0.826814220629717,0.5302106424711966,0.06586007802984883,0.0,-1.421539584953269e+308,-1000.0,2.1392270813840817];
            const v47 = new SharedArrayBuffer(56);
            const v49 = new BigInt64Array(v47);
            function f50(a51) {
                return v43 === 268435441;
            }
            v49[Symbol.toPrimitive] = f50;
            for (let v55 = 0; v55 < 5; v55++) {
                createGlobalObject().Atomics.waitAsync(v49, v55, v49);
            }
        `;
        const v61 = eval(v42);
        const o62 = {
            ...v61,
        };
        for (let i65 = 0, i66 = 10; i65 < i66; i66--) {
        }
        for (let i75 = 0, i76 = 10;
            (() => {
                for (let i79 = 0, i80 = 10; i80; i80--) {
                }
                return i75 < i76;
            })();
            i76--) {
        }
        return a3;
    }
    a3.then = f4;
    return a3;
}
f0(f0, f0, f0);
for (let i95 = 0, i96 = 10; i95 < i96; i96--) {
}
gc();

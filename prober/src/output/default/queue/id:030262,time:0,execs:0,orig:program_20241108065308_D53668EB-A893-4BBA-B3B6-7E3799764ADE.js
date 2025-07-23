async function f1(a2, a3, a4) {
    function f5(a6, a7) {
        const v9 = Math.fround(Math);
        const v10 = Math.round(a2);
        for (let i13 = 0, i14 = 10;
            (() => {
                const v15 = i13 < i14;
                for (let i19 = 0, i20 = 10 + 10; i20--, i20;) {
                }
                return v15;
            })();
            i14--) {
            Reflect.construct(BigInt64Array, [536870912]);
        }
        for (let i37 = 0, i38 = 10; i37 !== i38; i38--) {
        }
        f1(v10, v9, a3);
        const v46 = `
            const v47 = [-998652.9737568697,809.1708431813761,0.3060454231781444,0.826814220629717,0.5302106424711966,0.06586007802984883,0.0,-1.421539584953269e+308,-1000.0,2.1392270813840817];
            const v51 = new SharedArrayBuffer(56);
            const v52 = new BigInt64Array(v51);
            function f53(a54) {
                return v47 === 268435441;
            }
            v52[Symbol.toPrimitive] = f53;
            for (let v58 = 0; v58 < 5; v58++) {
                createGlobalObject().Atomics.waitAsync(v52, v58, v52);
            }
        `;
        eval(v46);
        for (let i67 = 0, i68 = 10; i67 < i68; i68--) {
        }
        for (let i77 = 0, i78 = 10;
            (() => {
                for (let i81 = 0, i82 = 10; i82; i82--) {
                }
                return i77 < i78;
            })();
            i78--) {
        }
    }
    a4.then = f5;
    return a4;
}
f1(f1, f1, f1);
for (let i97 = 0, i98 = 10; i97 < i98; i98--) {
}
gc();

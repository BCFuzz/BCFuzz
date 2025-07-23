const v0 = `
    const v1 = [-998652.9737568697,809.1708431813761,0.3060454231781444,0.826814220629717,0.5302106424711966,0.06586007802984883,0.0,-1.421539584953269e+308,-1000.0,2.1392270813840817];
    const v5 = new SharedArrayBuffer(56);
    const v7 = new BigInt64Array(v5);
    function f8(a9) {
        return v1 === 268435441;
    }
    v7[Symbol.toPrimitive] = f8;
    for (let v13 = 0; v13 < 5; v13++) {
        createGlobalObject().Atomics.waitAsync(v7, v13, v7);
    }
`;
eval(v0).__lookupSetter__;
gc();

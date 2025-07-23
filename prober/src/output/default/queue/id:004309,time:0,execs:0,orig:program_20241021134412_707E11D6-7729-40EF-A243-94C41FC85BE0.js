function F0(a2, a3) {
    if (!new.target) { throw 'must be called with new'; }
    for (let v4 = 0; v4 < 10; v4++) {
        [1000000000000.0,-1000000000.0,1000.0,-9.17873624779763e+307];
        for (let v6 = 0; v6 < 250; v6++) {
        }
        function F7() {
            if (!new.target) { throw 'must be called with new'; }
        }
        const v9 = new F7();
        const v10 = v9.constructor;
        v10.toString(v4, v10, v4, F0).match();
        const v14 = new Int16Array(a2);
        const v15 = new Int16Array();
        Reflect.apply(v15.copyWithin, v14, v10);
    }
}
new F0(F0, F0);
gc();

for (let i2 = 0, i3 = 10;
    (() => {
        const v4 = i2 < i3;
        for (let v5 = 0; v5 < 25; v5++) {
            function F6() {
                if (!new.target) { throw 'must be called with new'; }
                const v8 = [1000000.0,Infinity,-905874.1501267307,0.7252605056964067,-0.0,2.2250738585072014e-308,0.31775135766944107,-0.0];
                const v10 = new Int8Array(i3, v5, i2);
                function f11(a12, a13) {
                    return v5;
                }
                v10.valueOf = f11;
                ("").split(v8.values().next(), v10).push(v5);
            }
            new F6();
        }
        return v4;
    })();
    i3--) {
}
for (let i27 = 0, i28 = 10; i27 < i28; i28--) {
}
for (let i37 = -3, i38 = 10; i37 < i38; i38--) {
}
gc();

for (let v0 = 0; v0 < 25; v0++) {
    function F1() {
        if (!new.target) { throw 'must be called with new'; }
        const v3 = [1000000.0,Infinity,-905874.1501267307,0.7252605056964067,-0.0,2.2250738585072014e-308,0.31775135766944107,-0.0];
        const v5 = new Int8Array();
        ("").split(v3.values().next(), v5).push(v0);
    }
    new F1();
}
gc();

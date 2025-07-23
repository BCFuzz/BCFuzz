function F1() {
    if (!new.target) { throw 'must be called with new'; }
    const v3 = [1000000.0,Infinity,-905874.1501267307,0.7252605056964067,-0.0,2.2250738585072014e-308,0.31775135766944107,-0.0];
    this + "";
    v3[this] <<= 1.0;
    for (let v6 = 0; v6 < 250; v6++) {
        v3.length = 268435440;
    }
}
new F1();
gc();

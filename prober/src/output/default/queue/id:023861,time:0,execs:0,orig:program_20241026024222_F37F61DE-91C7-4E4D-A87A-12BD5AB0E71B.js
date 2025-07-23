const v0 = [0.8123021693907878,8.454379966471269e+307,228769.6425882592,0.9819194842161798,-1.0,0.17712805414612642,5.515074499090689e+307,9.365258740767623e+307,3.0007487798520707,-1000000000000.0];
v0[9] = v0;
function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    const v5 = this.constructor;
    let v6;
    try { v6 = new v5(); } catch (e) {}
    const v7 = v0.sort(a4);
    v7.pop(v0, v6, F1, v7, v6);
}
new F1();
gc();

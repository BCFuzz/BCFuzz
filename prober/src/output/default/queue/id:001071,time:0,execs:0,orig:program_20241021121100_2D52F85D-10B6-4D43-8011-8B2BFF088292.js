function F1(a3, a4) {
    if (!new.target) { throw 'must be called with new'; }
    try { this.__defineSetter__(a4, a3); } catch (e) {}
    a3 + a3;
}
new F1(1000n);
const v10 = [-1,-11091,47790,15];
v10.concat(v10);
try { new Uint8Array(2147483649n); } catch (e) {}
gc();

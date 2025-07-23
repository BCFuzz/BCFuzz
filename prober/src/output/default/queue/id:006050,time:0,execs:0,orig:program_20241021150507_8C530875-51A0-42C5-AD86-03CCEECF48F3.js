const v1 = Symbol.iterator;
const v2 = [255,-15877,6,65537,127,11,9,-65536];
const v3 = [-1376547621,9007199254740990,-8911,744476469,-39750];
function F4(a6, a7) {
    if (!new.target) { throw 'must be called with new'; }
    const v8 = this.constructor;
    try { new v8(a6); } catch (e) {}
    a6[7];
    this.f = a6;
}
new F4(v2);
new F4(v3);
Reflect.construct(F4, [v1]);
gc();

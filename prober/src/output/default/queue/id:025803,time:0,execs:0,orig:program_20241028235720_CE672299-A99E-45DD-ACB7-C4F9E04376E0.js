function F0() {
    if (!new.target) { throw 'must be called with new'; }
}
const v3 = new WeakMap();
const v4 = [-6,-1763103555,-38397,9007199254740991,-18155,0,-7,-10];
const v5 = [v4,v3];
const v8 = this.constructor.defineProperties(v4, v5);
try { v8.concat(F0); } catch (e) {}
gc();

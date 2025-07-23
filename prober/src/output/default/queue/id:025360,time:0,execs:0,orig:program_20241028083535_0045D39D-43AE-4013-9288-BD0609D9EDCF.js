const v1 = new WeakMap();
const v2 = [-6,-1763103555,-38397,9007199254740991,-18155,0,-7,-10];
const v3 = [v2,v1];
const v6 = this.constructor.defineProperties(v2, v3);
try { v6.concat(v2); } catch (e) {}
gc();

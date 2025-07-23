const v1 = new BigUint64Array();
v1.constructor = Symbol.species;
try { v1.slice(); } catch (e) {}
gc();

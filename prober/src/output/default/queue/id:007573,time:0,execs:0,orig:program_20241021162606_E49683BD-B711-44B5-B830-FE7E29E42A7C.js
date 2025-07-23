const v1 = Symbol.species;
const v2 = Symbol.for();
const v3 = v1.description;
const v6 = v3.blink(v3, v1).trimStart(Symbol, v2).includes;
try { v6.apply(v2); } catch (e) {}
gc();

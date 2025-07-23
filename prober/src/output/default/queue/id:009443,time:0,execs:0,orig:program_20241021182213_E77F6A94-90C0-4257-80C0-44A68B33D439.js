const v2 = new Int16Array();
v2[Symbol.toPrimitive] = Symbol;
try { this.parseFloat(v2); } catch (e) {}
gc();

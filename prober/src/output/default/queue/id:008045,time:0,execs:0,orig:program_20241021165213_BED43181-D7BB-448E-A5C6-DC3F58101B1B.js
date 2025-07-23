const v2 = ("-13")[undefined];
const v4 = new Uint32Array();
try { v4.set(v2); } catch (e) {}
const v7 = 10n ^ 10n;
const v8 = new Uint32Array();
try { v8.toSorted(v7); } catch (e) {}
gc();

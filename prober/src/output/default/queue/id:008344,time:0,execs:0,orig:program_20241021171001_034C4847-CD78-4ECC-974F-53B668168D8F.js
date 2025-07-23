let v1;
try { v1 = DataView.apply(DataView); } catch (e) {}
const v4 = new BigUint64Array(1657);
v4.indexOf(/r[xyz]\p{Nd}s(?:foo)*/isu, v1);
gc();

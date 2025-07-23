const v2 = [1.0,-922951.3552947193,-1e-15,2.0,0.9973266578139177,3.0,8.550317100764701,2.220446049250313e-16];
const v4 = new Int8Array();
let v5;
try { v5 = ("undefined").localeCompare("undefined", "-4096"); } catch (e) {}
const v6 = v2.toReversed();
v6.toString = v5;
try { v4.with(v6); } catch (e) {}
gc();

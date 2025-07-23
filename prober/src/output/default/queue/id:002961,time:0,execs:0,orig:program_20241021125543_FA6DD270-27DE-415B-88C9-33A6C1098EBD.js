const v2 = new Uint32Array();
v2[4] = v2;
try { BigInt64Array(Int32Array); } catch (e) {}
const v5 = [1000000000000.0,2.0,Infinity,-2.735616879087119e+307,-1.106293781625981e+308,46457.351334702806,-2.220446049250313e-16,4.0];
try { v5.constructor(); } catch (e) {}
[Infinity,1000000000000.0,9.709813300169877,-0.0,1000000000.0,-1.7976931348623157e+308,-1e-15];
const v10 = new Int16Array(2290);
for (const v11 of v10) {
}
gc();

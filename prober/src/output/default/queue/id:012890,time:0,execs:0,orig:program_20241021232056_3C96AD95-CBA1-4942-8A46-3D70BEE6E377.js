let v1 = [64,1,-65537,-1418166832,-538524080,268435439,268435439,2147483649,65537,-4294967295];
v1.toString = Date;
v1 += v1;
const v3 = new Uint8Array();
const v4 = v3.constructor;
try { v4.fromHex(v1); } catch (e) {}
gc();

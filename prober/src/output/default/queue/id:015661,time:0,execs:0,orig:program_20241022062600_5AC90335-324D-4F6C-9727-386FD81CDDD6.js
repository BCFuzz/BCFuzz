const v0 = [4.0,-1000.0,1e-15,-1.7976931348623157e+308,-5.031576564639626e+307,785.0670544885131];
v0.toString = v0.keys();
const v3 = [[v0,v0,v0,v0],v0];
const v6 = createGlobalObject().Float16Array;
try { new v6(v3); } catch (e) {}
gc();

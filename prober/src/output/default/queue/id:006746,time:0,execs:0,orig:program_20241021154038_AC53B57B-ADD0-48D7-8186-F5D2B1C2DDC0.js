const v1 = [0.23354615640567267,6.334817288851777,Infinity,5.0,-0.0,1000000000.0,7.754368282244404e+307,283.1439050822755,-235.31211208696186];
v1.valueOf = Symbol;
const v3 = new Int32Array(Symbol);
const v4 = v3.slice();
try { v4.slice(v1); } catch (e) {}
gc();

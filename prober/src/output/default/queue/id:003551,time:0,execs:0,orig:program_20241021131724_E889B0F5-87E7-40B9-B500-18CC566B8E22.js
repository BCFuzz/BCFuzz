function f0() {
    return f0;
}
const v1 = f0.constructor;
const v2 = [5.876156021425224e+307,1.7901246110986315e+308,2.2250738585072014e-308,-Infinity,-3.0];
try { v2.findLastIndex(v1); } catch (e) {}
gc();

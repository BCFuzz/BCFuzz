function f0() {
    return f0;
}
const v2 = [2.2250738585072014e-308,1000000.0];
function f3() {
    Object.defineProperty("POSITIVE_INFINITY", -1, { configurable: true, enumerable: true, set: f0 });
    return "POSITIVE_INFINITY";
}
Object.defineProperty(v2, 18, { get: f3 });
const v5 = new Int16Array();
const v6 = v5.constructor;
try { new v6(v2); } catch (e) {}
gc();

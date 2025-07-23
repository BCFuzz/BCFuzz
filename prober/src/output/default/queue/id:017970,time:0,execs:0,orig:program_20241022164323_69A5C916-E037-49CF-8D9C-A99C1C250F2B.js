const v1 = ("string").constructor;
function f2() {
    Proxy(v1, "string");
    return "string";
}
const v5 = new v1();
Object.defineProperty(v5, Symbol.toPrimitive, { configurable: true, value: f2 });
try { v5.charCodeAt(); } catch (e) {}
gc();

function f1() {
    function f2(a3, a4) {
        f2(a3, Reflect);
        return f2;
    }
    return f2;
}
Object.defineProperty(Reflect, Symbol.toPrimitive, { get: f1 });
try { Reflect.defineProperty(Reflect, Reflect); } catch (e) {}
gc();

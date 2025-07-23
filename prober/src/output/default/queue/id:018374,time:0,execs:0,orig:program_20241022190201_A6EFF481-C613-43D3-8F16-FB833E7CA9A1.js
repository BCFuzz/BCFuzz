for (let i = 0; i < 10; i++) {
    function f2() {
        return Reflect;
    }
    Object.defineProperty(Reflect, Symbol.toPrimitive, { configurable: true, get: f2 });
    Reflect.deleteProperty(Reflect, "Lr1II");
}
gc();

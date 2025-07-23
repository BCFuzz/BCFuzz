function f3() {
    WeakMap.toString = f3;
    parseInt.toPrimitive = parseInt;
    const v6 = parseInt.toPrimitive;
    v6(536870889n, 1.7976931348623157e+308);
    Object.defineProperty(WeakMap, v6, { configurable: true, get: WeakMap });
    WeakMap >>> -12;
    return -12;
}
try { f3(); } catch (e) {}
gc();

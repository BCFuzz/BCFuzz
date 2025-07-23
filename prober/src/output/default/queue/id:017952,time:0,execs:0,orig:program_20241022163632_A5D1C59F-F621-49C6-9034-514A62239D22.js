function f4() {
    let v5;
    try {
    const t0 = 65535;
    v5 = t0(f4, 255, Reflect, f4);
    } catch (e) {}
    v5 *= 65535;
    return 255;
}
Object.defineProperty(Reflect, Symbol.toPrimitive, { configurable: true, enumerable: true, value: f4 });
const v8 = new Uint8ClampedArray(255);
for (const v9 in v8) {
    const o10 = {
    };
    function f11() {
        return 255;
    }
    function f12(a13) {
        -Reflect;
        return Symbol;
    }
    Object.defineProperty(o10, "a", { configurable: true, enumerable: true, get: f11, set: f12 });
    o10.a = v9;
}
gc();

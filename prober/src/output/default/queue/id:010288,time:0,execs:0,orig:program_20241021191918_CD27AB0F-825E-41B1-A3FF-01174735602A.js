function f4(a5) {
    return 1000000000000.0;
}
Reflect.valueOf = f4;
const v6 = new Uint8ClampedArray(255);
for (const v7 in v6) {
    const o8 = {
    };
    function f9() {
        return f4;
    }
    function f10(a11) {
        -Reflect;
        return f9;
    }
    Object.defineProperty(o8, "a", { configurable: true, enumerable: true, get: f9, set: f10 });
    o8.a = v7;
}
gc();

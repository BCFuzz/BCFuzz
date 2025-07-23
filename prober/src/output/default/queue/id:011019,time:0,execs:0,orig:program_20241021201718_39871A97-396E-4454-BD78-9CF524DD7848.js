function f3(a4) {
    async function* f5(a6, a7, a8) {
    }
    for (let v9 = 0; v9 < 5; v9++) {
        f5(v9, f5, f5);
    }
}
Reflect[Symbol.toPrimitive] = f3;
const v13 = new Uint8ClampedArray(255);
for (const v14 in v13) {
    const o15 = {
    };
    function f16() {
        return Reflect;
    }
    function f17(a18) {
        return -Reflect;
    }
    Object.defineProperty(o15, "a", { configurable: true, enumerable: true, get: f16, set: f17 });
    o15.a = v14;
}
gc();

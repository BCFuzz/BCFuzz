const v1 = new BigUint64Array();
const v5 = new Uint8ClampedArray(255);
for (const v6 in v5) {
    const o7 = {
    };
    function f8() {
        return 255;
    }
    function f9(a10) {
        const v12 = [a10,a10];
        return Reflect.apply(BigInt.asUintN, v1, v12);
    }
    Object.defineProperty(o7, "a", { configurable: true, enumerable: true, get: f8, set: f9 });
    o7.a = v6;
}
gc();

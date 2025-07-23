class C0 {
}
const v1 = new C0();
const v4 = new Uint8ClampedArray(2502);
for (const v5 in v4) {
    const o6 = {
    };
    function f7() {
        return C0;
    }
    function f8(a9) {
        const o10 = {
        };
        return v5;
    }
    Object.defineProperty(o6, "a", { configurable: true, enumerable: true, get: f7, set: f8 });
    o6.a = v1;
}
gc();

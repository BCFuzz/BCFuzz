const v2 = new Uint8ClampedArray(255);
for (const v3 in v2) {
    const o4 = {
    };
    function f5() {
        return o4;
    }
    function f6(a7) {
        class C8 {
        }
        class C9 extends C8 {
        }
        delete C9.prototype;
        return f5;
    }
    Object.defineProperty(o4, "a", { configurable: true, enumerable: true, get: f5, set: f6 });
    o4.a = v3;
}
gc();

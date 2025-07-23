class C0 {
}
class C1 extends C0 {
}
const v2 = new C1();
const v5 = new Uint8ClampedArray(255);
for (const v6 in v5) {
    const o7 = {
    };
    function f8() {
        return v2;
    }
    function f9(a10) {
        const v11 = v2.a;
        let v12;
        try { v12 = C0.n(Uint8ClampedArray, v11, v11, v6, 255); } catch (e) {}
        v12 <= v11 ? v12 : v11;
        return f9;
    }
    Object.defineProperty(o7, "a", { configurable: true, enumerable: true, get: f8, set: f9 });
    o7.a = v6;
}
gc();

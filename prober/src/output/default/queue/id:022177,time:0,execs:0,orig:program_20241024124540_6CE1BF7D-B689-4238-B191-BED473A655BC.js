for (let i2 = -3, i3 = 10; i2 < i3; i3--) {
}
class C10 {
    static n(a12, a13, a14, a15) {
        Object.defineProperty(arguments, "callee", { value: [-1000000000.0,1.1764560861894894e+308] });
    }
}
try { C10.n(); } catch (e) {}
gc();

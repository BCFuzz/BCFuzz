const v1 = ReferenceError.prototype;
class C2 {
    constructor(a4, a5, a6) {
        const v8 = Uint8ClampedArray.from(a6);
        function f9() {
            return v1;
        }
        Object.defineProperty(v8, "constructor", { get: f9 });
        v8.subarray(a4, Uint8ClampedArray, this, v1);
    }
}
new C2(C2, C2, C2);
gc();

const v5 = new Float32Array(115);
const v8 = v5.buffer;
class C23 {
}
const v24 = new C23();
for (let v25 = 0; v25 < 100; v25++) {
    function F26(a28, a29, a30) {
        if (!new.target) { throw 'must be called with new'; }
        function f31() {
            return Float32Array;
        }
        function f32(a33) {
            try { a33.b(); } catch (e) {}
        }
        Object.defineProperty(a30, "b", { configurable: true, enumerable: true, get: f31, set: f32 });
        try { new a29(this, a28, v24); } catch (e) {}
        a30.b = a30;
    }
    new F26(v8, Int16Array, F26);
    new F26(v25, F26, F26);
}
gc();

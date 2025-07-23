new Uint16Array(Uint16Array, Uint16Array, Int16Array);
const v3 = Int16Array.buffer;
for (let i6 = 0, i7 = 10; i6 < i7; i7--) {
}
for (let i16 = 0, i17 = 10; i16 < i17; i17--) {
}
class C24 {
}
for (let i27 = 0, i28 = 10; i27 < i28; i28--) {
}
const v35 = new C24();
for (let v36 = 0; v36 < 50; v36++) {
    function F37(a39, a40, a41) {
        if (!new.target) { throw 'must be called with new'; }
        for (let v42 = 0; v42 < 25; v42++) {
            const v43 = v42 >>> v42;
            v43 | v43;
            v42++;
            v42--;
        }
        function f47() {
            return F37;
        }
        function f48(a49) {
            return Int16Array;
        }
        Object.defineProperty(a41, "b", { configurable: true, enumerable: true, get: f47, set: f48 });
        try { new a40(this, a39, v35); } catch (e) {}
        a41.b = a40;
    }
    new F37(v3, v35, F37);
    new F37(v36, F37, F37);
}
gc();

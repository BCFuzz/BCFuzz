const v1 = new SharedArrayBuffer();
function f2() {
    class C3 {
        constructor(a5, a6) {
            const o7 = {
            };
            o7.constructor.getOwnPropertyNames(a5);
        }
    }
    new C3();
    return f2;
}
v1[Symbol.toPrimitive] = f2;
try { new Int32Array(v1, 11, v1); } catch (e) {}
gc();

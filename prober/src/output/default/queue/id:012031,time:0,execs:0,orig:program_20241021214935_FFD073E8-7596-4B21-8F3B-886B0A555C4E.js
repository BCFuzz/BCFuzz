class C0 {
}
const v1 = new C0();
function f2(a3) {
    Reflect.construct(Float32Array, [Reflect,Reflect,Reflect,Reflect], a3);
    return Float32Array;
}
v1[Symbol.toPrimitive] = f2;
class C10 {
    constructor(a12, a13, a14, a15) {
        a12 >> v1;
    }
}
try { new C10(); } catch (e) {}
gc();

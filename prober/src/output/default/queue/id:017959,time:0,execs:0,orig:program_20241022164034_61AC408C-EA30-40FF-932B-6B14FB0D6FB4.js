function f2(a3) {
    for (let i7 = 0, i8 = 10 + 10; i8--, i7 < i8;) {
        const v16 = createGlobalObject();
        const v17 = v16.Atomics;
        try { v17.xor(v16, i8, i8); } catch (e) {}
        for (let v19 = 0; v19 < 100; v19++) {
        }
    }
}
Uint16Array[Symbol.toPrimitive] = f2;
class C22 {
    [Uint16Array] = 2;
}
gc();

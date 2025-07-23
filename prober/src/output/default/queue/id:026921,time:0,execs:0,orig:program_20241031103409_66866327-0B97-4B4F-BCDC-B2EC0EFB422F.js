const v2 = new Uint32Array(257);
function f3(a4) {
    return Reflect.construct(Uint32Array, Reflect, v2);
}
v2.toString = f3;
for (let i9 = 0, i10 = 10; i10--, i9 < i10;) {
    const v18 = createGlobalObject();
    const v19 = v18.Atomics;
    try { v19.xor(v2, v18, v2); } catch (e) {}
}
gc();

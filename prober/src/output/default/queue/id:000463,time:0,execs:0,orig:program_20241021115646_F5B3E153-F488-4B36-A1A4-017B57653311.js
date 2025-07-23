const v1 = new Uint16Array(Uint16Array, Uint16Array, Uint16Array);
with (v1) {
    try { WeakSet(v1); } catch (e) {}
    class C5 extends Set {
    }
    const v8 = Reflect.construct(C5, [v1,v1,v1,v1]);
    try { v8.difference(); } catch (e) {}
    class C10 {
    }
    try { C10(); } catch (e) {}
}
gc();

for (let v1 = 0; v1 < 10; v1++) {
    class C2 extends Int16Array {
        toString(a4, a5) {
            C2 /= Int16Array;
        }
    }
    const v6 = new C2();
    const v7 = v6.constructor;
    const v8 = new v7(v7, Int16Array, Int16Array, v6);
    try { v8.toString(); } catch (e) {}
}
gc();

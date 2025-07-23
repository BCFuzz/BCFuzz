for (let v0 = 0; v0 < 5; v0++) {
    class C1 {
    }
    const v2 = new C1();
    const v4 = ([C1,C1,C1,C1]).slice();
    const v7 = new ArrayBuffer(15);
    const v9 = new DataView(v7);
    v9.getInt16(v4, v2);
    for (let i = 0; i < 500; i++) {
    }
}
gc();

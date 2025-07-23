for (let v0 = 0; v0 < 10; v0++) {
    class C1 {
    }
    const v2 = new C1();
    for (let v3 = 0; v3 < 250; v3++) {
        v2["bigint" + v3] = v3;
    }
}
gc();

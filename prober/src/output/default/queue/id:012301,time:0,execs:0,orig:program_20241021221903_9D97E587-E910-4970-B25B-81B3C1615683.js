for (let v0 = 0; v0 < 10; v0++) {
    const v3 = new Uint32Array(1000);
    for (const v5 in v3) {
        const v6 = new Int16Array();
        const v8 = v6 && delete v6[v5];
        v8 || v8;
    }
    class C10 extends Int16Array {
    }
    const v11 = new C10();
    v11.find(C10);
}
gc();

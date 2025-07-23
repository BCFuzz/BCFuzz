function F1(a3, a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
    class C6 {
        get c() {
            const v8 = [this,this,this];
            v8.splice(256, 256);
            v8[3764] = 256;
        }
    }
    const v10 = new C6();
    const v13 = new BigUint64Array(586);
    for (const v14 of v13) {
        v10.c;
    }
}
new F1(256, F1, F1);
gc();

const v1 = new WeakMap();
for (let v2 = 0; v2 < 10; v2++) {
    class C4 {
        #c;
        constructor(a6, a7) {
            for (let v8 = 0; v8 < 32; v8++) {
                v1["p" + v8] = v8;
            }
        }
    }
    new C4();
}
gc();

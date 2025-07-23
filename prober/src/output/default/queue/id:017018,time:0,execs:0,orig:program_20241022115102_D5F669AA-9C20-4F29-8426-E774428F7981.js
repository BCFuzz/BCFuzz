for (let v0 = 0; v0 < 5; v0++) {
    const v1 = [127,128,2,4294967297];
    class C2 {
        constructor(a4) {
            v1.unshift(a4, ...v1);
        }
    }
    new C2(v1);
    new C2();
}
gc();

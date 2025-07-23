for (let v0 = 0; v0 < 10; v0++) {
    class C2 {
        constructor(a4) {
            const v6 = new Date();
            v6.setSeconds(a4);
        }
    }
    new C2(-536870912);
}
gc();

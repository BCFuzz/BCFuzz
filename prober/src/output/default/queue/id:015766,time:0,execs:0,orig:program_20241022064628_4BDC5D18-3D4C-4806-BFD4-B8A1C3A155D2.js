class C2 {
    constructor(a4) {
        for (let v5 = 0; v5 < 5; v5++) {
            for (let v6 = 0; v6 < 250; v6++) {
                v6++;
                v6--;
            }
            const v10 = Reflect.getPrototypeOf(a4);
            try { v10.of(); } catch (e) {}
        }
    }
}
new C2(Int32Array);
new C2(Float32Array);
gc();

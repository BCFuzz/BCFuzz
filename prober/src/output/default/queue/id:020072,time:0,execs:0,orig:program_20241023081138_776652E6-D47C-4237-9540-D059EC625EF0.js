class C0 {
    constructor(a2, a3) {
        const v6 = new Int32Array(255);
        for (const v7 in v6) {
            let v9 = 1.7976931348623157e+308;
            v9++;
            let v11 = +v9;
            let v14 = (v9 + v11++) + -4294967295;
            v14--;
        }
    }
}
new C0();
gc();

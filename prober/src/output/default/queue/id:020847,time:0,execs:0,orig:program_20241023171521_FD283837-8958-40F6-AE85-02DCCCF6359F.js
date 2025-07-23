class C0 {
}
const v1 = new C0();
const v2 = v1.constructor;
for (let v3 = 0; v3 < 250; v3++) {
    const v4 = new v2();
    const v5 = [0.5102972054393984,-579.6540025955,-4.2529622933020493e+307,3.0,1000000000.0,Infinity];
    function f6() {
        return f6;
    }
    const v7 = f6.bind(f6, v5, v2, v4);
    const o13 = {
        set b(a9) {
            for (let v10 = 0; v10 < 5; v10++) {
                v10++ << v7;
            }
        },
    };
}
gc();

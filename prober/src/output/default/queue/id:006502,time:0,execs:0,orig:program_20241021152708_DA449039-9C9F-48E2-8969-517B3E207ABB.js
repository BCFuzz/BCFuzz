class C1 {
    [-2033714633];
}
const v2 = new C1();
class C5 {
    constructor(a7, a8) {
        for (let v9 = 0; v9 < 32; v9++) {
            a8[2147483647 + v9] = v9;
        }
    }
}
new C5(2040645292, C1);
new C5(v2, v2);
new C5(-2033714633, v2);
v2.g = C5;
for (let i15 = 0; i15 < 21768; i15++) {
}
gc();

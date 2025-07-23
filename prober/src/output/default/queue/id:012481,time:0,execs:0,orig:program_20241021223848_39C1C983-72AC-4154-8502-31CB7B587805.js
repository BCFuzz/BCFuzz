class C3 extends Map {
}
const v4 = new C3();
Object.defineProperty(v4, 0, { value: 3 });
function f5() {
    for (let v6 = 0; v6 < 5; v6++) {
        v4[v6] &= -1165038166;
        for (let v7 = 0; v7 < 5; v7++) {
        }
    }
    return 3;
}
([1000000000000.0,-32.53866764552242,-455051.9881954029,-4.0,-1e-15])["forEach"](f5);
gc();

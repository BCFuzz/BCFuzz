function f0() {
    const o2 = {
        get h() {
            return this;
        },
    };
    return o2;
}
const v3 = f0();
class C4 extends f0 {
    h = v3;
}
for (let v5 = 0; v5 < 5; v5++) {
    new C4();
}
gc();

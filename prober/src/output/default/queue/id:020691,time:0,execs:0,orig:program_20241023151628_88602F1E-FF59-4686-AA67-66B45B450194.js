function f0(a1) {
    const o7 = {
        valueOf(a3) {
            this.constructor.seal(this);
            return a3;
        },
    };
    for (let v8 = 0; v8 < 32; v8++) {
        o7["p" + v8] = v8;
    }
    return o7;
}
const v11 = /a{0,1}?/ygu;
class C12 extends f0 {
    10 = v11;
}
const v13 = new C12();
v13.valueOf(v11, v11);
gc();

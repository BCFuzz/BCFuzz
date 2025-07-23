function f0(a1) {
    const o7 = {
        valueOf(a3) {
            this.constructor.seal(this);
            return a1;
        },
    };
    return o7;
}
const v8 = /a{0,1}?/ygu;
class C9 extends f0 {
    10 = v8;
}
const v10 = new C9();
v10.valueOf();
gc();

const v0 = /(?:a+)*[EBKw(?:ab)\x60]/mdyu;
const v2 = [v0,v0];
const v4 = Reflect.apply(v0.exec, v0, v2);
const o10 = {
    n(a6, a7, a8) {
        a7.setPrototypeOf(a7, a6);
        return v4;
    },
};
const t9 = o10.n;
t9(v4, Reflect);
gc();

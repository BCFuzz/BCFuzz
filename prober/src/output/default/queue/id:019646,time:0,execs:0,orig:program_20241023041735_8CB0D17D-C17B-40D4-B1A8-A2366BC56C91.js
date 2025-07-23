function f1(a2) {
    const v5 = this.constructor;
    const o6 = {
    };
    o6.h = 1000000000.0;
    const v7 = v5.is(1000000000.0, a2);
    return v7 && v7;
}
f1.call();
const v11 = new Int16Array(1055);
v11.filter(f1);
gc();

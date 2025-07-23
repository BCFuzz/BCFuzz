function f0(a1, a2, a3, a4) {
    a1.shift(f0, a1, a1);
    const o6 = {
    };
    return o6;
}
const v7 = [f0,f0,f0,f0];
const v8 = [v7];
const o9 = {
};
o9.deleteProperty = f0;
const v11 = new Proxy(v8, o9);
v11.shift(o9, v7, f0, v11, v11);
gc();

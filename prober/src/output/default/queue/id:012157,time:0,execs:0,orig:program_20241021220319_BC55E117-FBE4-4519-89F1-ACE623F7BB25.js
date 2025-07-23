function f0(a1, a2, a3, a4) {
    const o5 = {
    };
    return o5;
}
const v7 = [[f0,f0]];
const o8 = {
};
o8.deleteProperty = f0;
const v10 = new Proxy(v7, o8);
v10.shift();
gc();

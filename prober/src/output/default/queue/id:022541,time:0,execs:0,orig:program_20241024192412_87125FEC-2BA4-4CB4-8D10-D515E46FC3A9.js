const v0 = [536870912,1513399583,1024,-2147483649];
function f1(a2, a3, a4, a5) {
    return a2.at();
}
const o7 = {
};
o7.deleteProperty = f1;
const v9 = new Proxy(v0, o7);
v9.shift(o7, f1, v0, o7);
gc();

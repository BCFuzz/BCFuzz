const v1 = [536870912,1513399583,1024,-2147483649];
function f2(a3, a4, a5, a6) {
    return 127;
}
const o7 = {
};
o7.deleteProperty = f2;
const v9 = new Proxy(v1, o7);
v9.shift(v1, v9, v1);
gc();

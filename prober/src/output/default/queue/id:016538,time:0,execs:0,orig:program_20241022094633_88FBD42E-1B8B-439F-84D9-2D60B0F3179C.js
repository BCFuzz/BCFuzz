function f0() {
}
const v1 = [4096,12,-757687774,104433551,-6253,-2147483649,3];
const o2 = {
    "deleteProperty": f0,
};
const v4 = new Proxy(v1, o2);
delete v4.c;
gc();

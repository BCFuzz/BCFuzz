function f1() {
    return -4294967296;
}
const v4 = new Int8Array();
const o5 = {
};
o5.has = f1;
const v7 = new Proxy(v4, o5);
42 in v7;
for (let i11 = -3, i12 = 10; i11 < i12; i12--) {
}
gc();

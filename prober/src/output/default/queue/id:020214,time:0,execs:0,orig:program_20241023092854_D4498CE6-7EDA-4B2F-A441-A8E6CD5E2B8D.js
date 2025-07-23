for (let [i4, i5] = (() => {
        eval();
        return [0, 10];
    })();
    i4 < i5;
    i5--) {
}
const v12 = [4294967296,-1507112381];
const o13 = {
};
const v15 = new Proxy(v12, o13);
v15.copyWithin();
const v17 = [-42762,-347982311,-9223372036854775808,4,22794,-41340,7,16473];
for (let i = 0; i < 10; i++) {
    const o18 = {
        __proto__: v17,
    };
    o18.copyWithin();
}
gc();

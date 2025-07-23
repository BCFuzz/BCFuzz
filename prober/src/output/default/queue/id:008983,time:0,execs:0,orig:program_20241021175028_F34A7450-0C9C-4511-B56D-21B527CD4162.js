function f1() {
    return 1024;
}
class C2 {
}
const v3 = new C2();
const o4 = {
    "defineProperty": f1,
};
for (let [i9, i10] = (() => {
        let v6 = 0;
        return [v6--, 10];
    })();
    i9 !== i10;
    i10--) {
}
const v17 = new Proxy(v3, o4);
v17.__lookupGetter__ = v17;
gc();

class C0 {
}
const v1 = new C0();
function F2(a4, a5) {
    if (!new.target) { throw 'must be called with new'; }
}
const v6 = new F2(v1, F2);
const v9 = new Int16Array(3681);
for (let [i12, i13] = (() => {
        v6[536870889] = v1;
        return [0, 10];
    })();
    i12 < i13;
    i13--) {
}
for (const v20 in v9) {
    class C21 {
    }
    const v22 = new C21();
    const v24 = this.constructor;
    v24.assign(v22, v24, v6);
}
gc();

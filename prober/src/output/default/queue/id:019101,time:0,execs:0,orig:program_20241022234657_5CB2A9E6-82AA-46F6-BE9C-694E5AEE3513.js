const v1 = new Map();
const v2 = v1.constructor;
function f3() {
    class C4 {
    }
    const v5 = new C4();
    const v7 = new Proxy(v2, v5);
    for (let [i13, i14] = (() => {
            const v10 = new Int16Array();
            v10.toSorted(v7);
            return [0, 10];
        })();
        i13 < i14;
        i14--) {
    }
    return v2;
}
([-44525,10]).flatMap(f3);
gc();

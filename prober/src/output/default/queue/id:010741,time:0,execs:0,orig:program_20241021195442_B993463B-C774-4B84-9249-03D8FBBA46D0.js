function f0() {
    return f0;
}
class C1 extends f0 {
}
const v2 = new C1();
[v2,v2];
const v5 = new Int8Array();
const v7 = new Int8Array(255);
for (const v8 in v7) {
    const o9 = {
    };
    for (let [i13, i14] = (() => {
            const v11 = o9.e;
            Object.defineProperty(v5, v11, { writable: true, enumerable: true, value: v11 });
            return [-3, 10];
        })();
        i13 < i14;
        i14--) {
        i13 * i13;
        i14 == i14;
    }
}
gc();

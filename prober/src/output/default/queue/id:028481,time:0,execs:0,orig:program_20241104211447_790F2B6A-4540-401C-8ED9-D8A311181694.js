const o6 = {
    toString(a2, a3) {
        class C4 {
        }
        class C5 extends C4 {
        }
        Object.defineProperty(C4, 6, { configurable: true, value: -13 });
        return -13;
    },
};
-o6;
for (let i10 = 0, i11 = 10; i10 < i11; i11--) {
}
const v21 = ("256").constructor.fromCharCode(-1024);
const v24 = new Proxy(Reflect, Reflect);
v24.defineProperty(v24, v21, v24);
const o26 = {
    ...v24,
};
for (let i29 = 0, i30 = 10; i29 < i30; i30--) {
}
for (let i39 = 0, i40 = 3747; i39 !== i40; i40--) {
}
gc();

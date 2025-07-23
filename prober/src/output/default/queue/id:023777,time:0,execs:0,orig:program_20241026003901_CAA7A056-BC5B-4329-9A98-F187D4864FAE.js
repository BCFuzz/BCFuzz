const v1 = /(?:a+)*a+b(a\1)/dvis;
const v2 = /na\fb\nc\rd\te\vf[^ia(?!bbb|bb)c]/dyisu;
Object.defineProperty(v2, "toString", { writable: true, configurable: true, value: Date });
v1.test(v2);
for (let i6 = 0, i7 = 10; i7--, i6 < i7;) {
}
gc();

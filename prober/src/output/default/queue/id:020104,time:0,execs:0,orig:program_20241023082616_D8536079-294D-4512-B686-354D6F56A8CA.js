class C0 {
}
new C0();
class C2 extends C0 {
}
class C3 {
}
for (let i = 0; i < 100; i++) {
    function f6(a7, a8, a9, a10) {
        const o11 = {
            __proto__: a9,
        };
        o11[Symbol.toStringTag] = C3;
        return o11;
    }
    f6(2, "o", f6());
}
for (let v16 = 0; v16 < 100; v16++) {
}
gc();

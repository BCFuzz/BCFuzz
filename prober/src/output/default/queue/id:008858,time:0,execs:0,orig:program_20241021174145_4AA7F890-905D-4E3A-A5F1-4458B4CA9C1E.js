function f0() {
    return f0;
}
class C1 extends f0 {
}
for (let i = 0; i < 10; i++) {
    function f6(a7, a8, a9, a10) {
        const o11 = {
            [a10]: "multiline",
            __proto__: a9,
        };
        o11.e = o11;
        return o11;
    }
    f6(2, "o", f6(undefined, "multiline", "multiline", "multiline"));
}
class C14 {
}
class C15 extends C14 {
}
for (let v16 = 0; v16 < 250; v16++) {
}
gc();

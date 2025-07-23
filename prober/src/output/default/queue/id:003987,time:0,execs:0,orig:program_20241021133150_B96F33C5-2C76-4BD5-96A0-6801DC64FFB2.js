function f0() {
    return f0;
}
let v1;
try { v1 = f0.bind(f0); } catch (e) {}
for (let i = 0; i < 10; i++) {
    const o7 = {
        set b(a3) {
            for (let v4 = 0; v4 < 5; v4++) {
                v4++ << v1;
            }
        },
    };
    o7.b = o7;
}
gc();

function f0() {
    return f0;
}
f0.toString = f0;
for (let v1 = 0; v1 < 10; v1++) {
    for (let i = 0; i < 5; i++) {
        const o8 = {
            toString(a4, a5) {
                a4.toString(f0);
                a4.toString(transferArrayBuffer);
            },
        };
        o8.toString(o8);
    }
}
gc();

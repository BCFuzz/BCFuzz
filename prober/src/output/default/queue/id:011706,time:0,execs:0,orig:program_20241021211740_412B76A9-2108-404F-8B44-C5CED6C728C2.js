class C0 {
}
with (C0) {
    const v1 = `
        function f2() {
            return C0;
        }
    `;
    eval(v1);
}
gc();

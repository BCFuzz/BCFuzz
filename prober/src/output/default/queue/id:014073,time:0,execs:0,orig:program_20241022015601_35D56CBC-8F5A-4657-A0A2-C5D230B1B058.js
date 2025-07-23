for (let i = 0; i < 5; i++) {
    const o7 = {
        toString(a1, a2) {
            function f3() {
                return this;
            }
            return f3.bind().constructor.bind();
        },
    };
    o7.toString();
    o7.toString();
}
gc();

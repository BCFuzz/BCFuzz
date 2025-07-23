for (let i = 0; i < 5; i++) {
    const o6 = {
        toString(a1, a2) {
            function f3() {
                return a2;
            }
            f3.bind();
            f3.bind(a2);
        },
    };
    o6.toString(o6, o6, o6);
    -o6;
}
gc();

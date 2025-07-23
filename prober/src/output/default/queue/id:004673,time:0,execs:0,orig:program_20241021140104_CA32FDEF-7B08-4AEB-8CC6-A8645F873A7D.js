for (let i = 0; i < 5; i++) {
    const o5 = {
        toString(a2, a3) {
            a3 * "8";
            return a2;
        },
    };
    o5.toString();
    -o5;
}
gc();

for (let v0 = 0; v0 < 10; v0++) {
    const o8 = {
        toString(a2, a3) {
            function f4() {
                Reflect.ownKeys();
                return f4;
            }
            f4.call();
        },
    };
    try { o8.toString(v0); } catch (e) {}
}
gc();

function f0() {
    for (let v4 = 0; v4 < 32; v4++) {
        function F5() {
            if (!new.target) { throw 'must be called with new'; }
            function f7(a8) {
                return f0;
            }
            Object.defineProperty(this, "c", { configurable: true, set: f7 });
        }
        new F5();
        new F5();
        for (let v11 = 0; v11 < 10; v11++) {
        }
    }
    const o12 = {
        [5]: 5,
        "d": "localeCompare",
        "f": 5,
        "g": -33020,
        "h": -33020,
        [-33020]: -33020,
        "b": 5,
        "e": "localeCompare",
        "c": 5,
    };
    return -33020;
}
f0();
f0();
gc();

for (let i2 = 0, i3 = 10;
    (() => {
        const v4 = i2 < i3;
        Array.setPrototypeOf = Array;
        function f6() {
            return Array;
        }
        const v8 = new Proxy(f6, Array);
        v8.__proto__ = [-572867068,-935637352];
        return v4;
    })();
    i3--) {
}
gc();

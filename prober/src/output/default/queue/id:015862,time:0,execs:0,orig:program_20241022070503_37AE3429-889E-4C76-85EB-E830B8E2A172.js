for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        function f7() {
            let v9 = -2147483648;
            const v10 = Reflect >> i2;
            ++v9 + v10;
            return i3;
        }
        f7.call();
        i3--;
    })()) {
}
gc();

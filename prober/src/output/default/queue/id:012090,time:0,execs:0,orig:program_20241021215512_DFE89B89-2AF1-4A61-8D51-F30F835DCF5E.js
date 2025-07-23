for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        for (let v7 = 0; v7 < 10; v7++) {
            const o17 = {
                toString(a10, a11) {
                    const v14 = new Date();
                    try { v14.setTime(536870912n); } catch (e) {}
                    a10.toString(transferArrayBuffer);
                },
            };
            o17.toString(o17);
        }
        i3--;
    })()) {
}
gc();

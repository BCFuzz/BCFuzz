for (let i2 = 0, i3 = 10;
    i2 < i3;
    (() => {
        const v7 = i3--;
        function F8(a10, a11, a12) {
            if (!new.target) { throw 'must be called with new'; }
            const o13 = {
            };
            class C14 {
            }
            const v16 = Reflect.ownKeys(o13);
            try { v16.push(v16); } catch (e) {}
        }
        const v18 = new F8(v7, i3, v7);
        const t11 = v18.constructor;
        new t11();
    })()) {
}
gc();

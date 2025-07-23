for (let i = 0; i < 5; i++) {
    for (let i2 = 0, i3 = 10; i3--, i2 < i3;) {
        const v11 = createGlobalObject();
        const v12 = v11.Atomics;
        try { v12.sub(createGlobalObject, i2, v11); } catch (e) {}
        for (let v14 = 0; v14 < 100; v14++) {
        }
    }
}
[-6.3275993592212725,0.0,-506385.6577863055,-816.4700327998935,-2.220446049250313e-16,-184.5617867016805,-3.0];
gc();

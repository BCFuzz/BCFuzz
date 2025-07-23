for (let [i9, i10] = (() => {
        for (let v3 = 0; v3 < 250; v3++) {
            v3++;
            const v6 = new WeakSet();
            const t3 = v6.add(v6);
            t3.toString = Date;
            v3--;
        }
        return [0, 10];
    })();
    i9 < i10;
    i10--) {
}
gc();

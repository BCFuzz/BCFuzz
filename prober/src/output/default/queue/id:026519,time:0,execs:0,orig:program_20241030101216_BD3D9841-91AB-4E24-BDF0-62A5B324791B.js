for (let i2 = 0, i3 = 10; i2 != i3; i3--) {
    for (let i11 = i3, i12 = 10;
        i3 < i12;
        (() => {
            i12--;
            function f17(a18) {
                const v21 = Symbol.toPrimitive;
                const v22 = Symbol.for(i12);
                const v23 = new WeakSet();
                const t5 = v23.add(v21).constructor;
                const v26 = new t5();
                v26.add(v22);
                return a18;
            }
            try { f17(); } catch (e) {}
        })()) {
    }
}
for (let i33 = 0, i34 = 10; i33 < i34; i34--) {
}
gc();

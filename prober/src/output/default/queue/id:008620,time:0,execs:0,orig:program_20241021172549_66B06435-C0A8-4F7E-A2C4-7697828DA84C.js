for (let i2 = 0, i3 = 10; i2 < i3; i3--) {
    const v12 = new Int32Array(681);
    function f13(a14, a15, a16, a17) {
        -a14;
        return a17;
        arguments.valueOf = f13;
        return a15;
    }
    v12.map(f13);
}
gc();

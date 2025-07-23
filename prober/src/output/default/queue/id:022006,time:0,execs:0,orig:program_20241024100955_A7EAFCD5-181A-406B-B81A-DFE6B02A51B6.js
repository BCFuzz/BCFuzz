for (let v1 = 0; v1 < 50; v1++) {
    const v2 = [9223372036854775807n,9223372036854775807n];
    function f3() {
        return 9223372036854775807n;
    }
    v2[Symbol.toPrimitive] = f3;
    this.parseInt(v2, v1);
}
gc();

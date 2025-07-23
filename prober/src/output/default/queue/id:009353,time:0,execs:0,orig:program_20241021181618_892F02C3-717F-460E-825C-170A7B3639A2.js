function f0() {
    for (let v1 = 0; v1 < 100; v1++) {
        const v3 = [Date,Date,Date];
        v3.toString = Date;
        this.parseInt(v3);
    }
    return f0;
}
f0();
f0();
gc();

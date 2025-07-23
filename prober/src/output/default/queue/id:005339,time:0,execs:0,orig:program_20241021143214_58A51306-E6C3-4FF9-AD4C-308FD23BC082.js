class C2 {
    constructor(a4, a5) {
        this.a = "symbol";
        this.a = this;
    }
    2823 = "0";
}
for (let i = 0; i < 10; i++) {
    Reflect.construct(C2, ["symbol","symbol","symbol","symbol","symbol"]);
}
gc();

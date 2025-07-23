for (let i = 0; i < 25; i++) {
    class C1 extends Map {
        #d = Map;
        constructor(a3) {
            for (let v4 = 0; v4 < 25; v4++) {
            }
            super();
            const v5 = [this,this,this];
            class C6 {
                #g = v5;
            }
        }
    }
    const v7 = new C1();
    new C1(v7);
}
gc();

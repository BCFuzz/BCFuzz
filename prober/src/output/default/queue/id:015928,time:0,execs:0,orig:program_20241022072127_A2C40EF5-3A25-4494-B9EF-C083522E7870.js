for (let i = 0; i < 5; i++) {
    for (let v1 = 0; v1 < 5; v1++) {
        class C3 extends String {
            static {
                try { this.fromCharCode(undefined); } catch (e) {}
                try {
                    super.throw();
                } catch(e7) {
                }
            }
            static {
                const v9 = [1000000000000.0,902.7612604618062,1e-15,-5.0,-579649.4573167565];
                v9.push(String);
                for (const v11 of v9) {
                    v11.__proto__ = v9;
                }
            }
        }
    }
}
gc();

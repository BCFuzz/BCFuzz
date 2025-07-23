function f0() {
    return f0;
}
this.h = true;
delete this.h;
this.constructor.defineProperties(f0, this);
gc();

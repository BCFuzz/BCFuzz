this.h = true;
delete this.h;
this.constructor.freeze(this);
gc();

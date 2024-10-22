function privatepublicstatic() {
    class MyClass {
        a = 1
        #b = 2
        static #c =3
    
        incB() {
            this.#b++;
            console.log(this.#b)
        }
    }
    
    const m = new MyClass();
    m.incB();
}

function privateforfunction() {
    class MyClass {
        // # là ký tự của private
        #x = 0;

        #incX() {
            this.#x++;
            console.log(this.#x);
        }

        publicIncX() {
            return this.#incX();
        }

        set #setX(x) {
            this.#x = x;
        }

        get #getX() {
            return this.#x;
        }
    }

    const m = new MyClass();
    m.publicIncX();
}

privateforfunction();
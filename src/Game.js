class Game {
    #username;
    #vida;
    #energia;
    #ki;
    constructor(username) {
        this.#username = username;
        this.#vida=1000;
        this.#energia=1000;
        this.#ki=1000;
        this.mostrarStats();
    }
    //metodo para mostrar stats del jugador
    mostrarStats(){
        //valida que el decremento de vida sea mayor o igual a 0
        console.log(`nombre:${this.#username} vida: ${this.#vida} energia: ${this.#energia} ki: ${this.#ki}`);
    }
    get username(){
        return this.#username;
    }
    get vida(){
        return this.#vida;
    }
    get energia(){
        return this.#energia;
    }  
    get ki(){
        return this.#ki;
    }
        set vida(valor) {
        this.#vida = Math.max(0, valor); // nunca baja de 0
    }
    set energia(valor) {
        this.#energia = Math.max(0, valor);
    }
    set ki(valor) {
        this.#ki = Math.max(0, valor);
    }
    //metodo para decrementar vida del jugador
decrementaVida(danio){
    console.log("Decrementando vida", this.#vida, "danio:", danio); 
    // Valida que la vida no sea menor a 0
    this.#vida = this.#vida - danio >= 0 ? this.#vida - danio : 0;
    // Muestra los stats actualizados
    this.mostrarStats();
}
    /*
    resta energia y ki del personaje que esta atacando y recibe como argumento un objeto
    corrspondiente al jugador opuesto, esto para acceder al metodo decrementovida y reducir sus stats
    */
    //metodo para ataque basico
atk_bascic(player){
    this.#energia = this.#energia -150 >= 0 ? this.#energia -150 : 0;
    this.#ki = this.#ki -200 >= 0 ? this.#ki -200 : 0;
    player.decrementaVida(175); // ahora decrementa 175
}

    atk_especial(player) {
        this.#energia = this.#energia - 300 >= 0 ? this.#energia - 300 : 0;
        this.#ki = this.#ki - 400 >= 0 ? this.#ki - 400 : 0;
        player.decrementaVida(350);
        this.mostrarStats();
    }
        // Cargar Ki (recupera ki del propio jugador)
cargarKi() {
    // ⚠️ Verifica si realmente hace falta restaurar
    if (this.#ki >= 1000 && this.#energia >= 1000) {
        return false; // ❌ No aplicó porque ambos están llenos
    }

    // ✅ Restaurar energía y ki con límites
    this.#ki = this.#ki + 200 <= 1000 ? this.#ki + 200 : 1000;
    this.#energia = this.#energia + 100 <= 1000 ? this.#energia + 100 : 1000;

    this.mostrarStats();
    return true; // ✅ Acción aplicada
}
    // Semilla (restaurar todo)
semilla() {
    const vidaMaxima = 1000;

    // Devuelve un valor indicando si curó o no
    if (this.#vida >= vidaMaxima) {
        return false; // ❌ No se curó (vida ya llena)
    }

    // ✅ Curación completa
    this.#vida = vidaMaxima;
    this.#energia = 1000;
    this.#ki = 1000;
    this.mostrarStats();

    return true; //curado
}
}
    let player1 = new Game("Goku");
    let player2 = new Game("Vegeta");

    export default Game;
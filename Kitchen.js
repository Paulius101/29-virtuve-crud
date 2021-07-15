class Kitchen {
    constructor(name) {
        this.name = name;
        this.itemList = []
    }

    intro() {
        console.log(`Sveiki atvyke i ${this.name} virtuve!`);
    }

    nupirkta(product, quantity) {
        let formatedProduct = product.charAt(0).toUpperCase() + product.slice(1)
        this.itemList.push({
            product: formatedProduct,
            quantity: quantity,

        })
        // console.log(this.itemList);
    }

    turimiProduktai() {

        for (let i = 0; i < this.itemList.length; i++) {

            const element = this.itemList[i];

            console.log(`${i + 1}) ${element.product}: ${element.quantity}`);
        }

    }

    sunaudota(product, quantity) {
        for (let i = 0; i < this.itemList.length; i++) {
            const element = this.itemList[i];
            if (element.product.toLowerCase() === product) {
                element.quantity -= quantity
                break;
            }
        }
    }

    sugedesProduktas(product) {
        const newList = [];
        for (let i = 0; i < this.itemList.length; i++) {
            let element = this.itemList[i];
            if (element.product.toLowerCase() !== product) {
                newList.push(element)
            }

        }
        this.itemList = newList;
        // console.log(this.itemList);
    }

}

module.exports = Kitchen;
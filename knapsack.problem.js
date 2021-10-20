(() => {
    class Item {
        #weight = 0;
        #priceForGramm = 0;
        #priceFull = 0;

        constructor(weight, priceForGramm) {
            this.#weight = weight;
            this.#priceForGramm = priceForGramm;
            this.#priceFull = this.#weight * this.#priceForGramm;
        }

        get priceFull() {
            return this.#priceFull;
        }

        get wight() {
            return this.#weight;
        }
    }

    class Bag {
        #capacity = 0;
        #items = [];

        constructor(capacity) {
            this.#capacity = capacity;
        }

        #arrFitredByBinMap(arr, binMap) {
            return arr.filter((_, index) => binMap & (1 << index))
        }

        fillOptimal(arrItems) {
            let bestPrice = Number.NEGATIVE_INFINITY;
            let bestArr = null;
            const maxIndex = 2 ** arrItems.length;

            for (let i = 1; i < maxIndex; i++) {
                const resArr = this.#arrFitredByBinMap(arrItems, i);
                const resPrice =  resArr.reduce((r, c) => r + c.priceFull, 0);
                const resWeight =  resArr.reduce((r, c) => r + c.wight, 0);

                if (resPrice > bestPrice && resWeight <= this.#capacity) {
                    bestPrice = resPrice;
                    bestArr = resArr;
                }   
            }

            this.#items = bestArr;
        }

        get items() {
            return this.#items;
        }
    }

    const items = [
        new Item(3, 1000),
        new Item(2, 500),
        new Item(20, 100),
    ];

    const bag = new Bag(23);
    bag.fillOptimal(items);
    console.log(bag.items)

})()
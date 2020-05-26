export default class SortedList {
 
        constructor() {
            this.items = [];
            this.length = 0;
        }
      
        add(item) {
            this.items.push(item);
            this.length = this.items.length;
            this.items.sort(function (a, b) {
                return a - b;
            });
        }
      
        get(pos) {
            if (pos > this.items.length) {
                throw new Error('OutOfBounds');
            } else {
                return this.items[pos];
            };
        }
      
        max() {
            if (this.items.length == 0) {
                throw new Error('EmptySortedList');
            } else {
                return this.items[this.length -1];
            };
        }
      
        min() {
            if (this.items.length == 0) {
                throw new Error('EmptySortedList');
            } else {
                return this.items[0];
            };
        }
      
        sum() {
            let suma = 0;
            this.items.forEach(item => {
                suma += item;
            });
            return suma
        }
      
        avg() {}
    }

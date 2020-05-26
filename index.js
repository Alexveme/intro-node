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
      
        max() {}
      
        min() {}
      
        sum() {}
      
        avg() {}
    }

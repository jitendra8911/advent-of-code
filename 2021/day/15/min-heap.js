export class MinHeap {
    constructor(arr) {
        this.arr = arr;
        this.heapSize = arr.length;
        this.buildHeap();
    }

    minHeapify(i) {
        let smallest;
        let l = this.left(i);
        let r = this.right(i);
        if (l < this.heapSize && this.arr[l].cost < this.arr[i].cost) {
            smallest = l;
        } else {
            smallest = i;
        }
        if (r < this.heapSize && this.arr[r].cost < this.arr[smallest].cost) {
            smallest = r;
        }

        if (smallest !== i) {
            let temp = this.arr[i];
            this.arr[i] = this.arr[smallest];
            this.arr[smallest] = temp;
            this.minHeapify(smallest)
        }
    }

    buildHeap() {
        for (let i = parseInt(this.heapSize/2) - 1; i >= 0; i--) {
            this.minHeapify(i);
        }
    }

    heapExtractMin() {
        const min = this.arr[0];
        this.arr[0] = this.arr[this.heapSize - 1];
        this.heapSize--;
        this.minHeapify(0);

        return min;
    }


    minHeapInsert(key) {
        this.heapSize++;
        this.arr[this.heapSize - 1] = {
            cost: Number.POSITIVE_INFINITY
        };
        this.heapDecreaseKey(this.heapSize - 1, key);
    }

    heapDecreaseKey(i, key) {
        const cost = key.cost;
        if (this.arr[i].cost < cost) {
            console.error(`cannot decrease key ${cost} at i: ${i} which already has a value smaller than key of ${this.arr[i-1]}`);
        }
        this.arr[i] = key;
        while (i > 0 && this.arr[i].cost < this.arr[this.parent(i)].cost) {
            const temp = this.arr[i];
            this.arr[i] = this.arr[this.parent(i)];
            this.arr[this.parent(i)] = temp;
            i = this.parent(i);
        }
    }

    left(i) {
        return (2 * i) + 1;
    }

    right(i) {
        return (2 * i) + 2;
    }

    parent(i) {
        if (i % 2 === 0) {
            return (i/2) - 1;
        }
        return parseInt(i/2);
    }
}


const minHeap = new MinHeap([]);
minHeap.minHeapInsert({location: [0,0], cost: 0});
minHeap.minHeapInsert({location: [0,1], cost: 11});
minHeap.minHeapInsert({location: [1,0], cost: 7});
minHeap.minHeapInsert({location: [1,1], cost: 20});
minHeap.minHeapInsert({location: [1,2], cost: 14});

minHeap.heapExtractMin();
minHeap.heapExtractMin();


console.log(minHeap.arr)
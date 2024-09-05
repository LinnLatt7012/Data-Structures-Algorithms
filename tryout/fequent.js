function topKFrequent(nums, k) {
    const freqMap = new Map();
    
    // Count frequency of each element
    for (const num of nums) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
    
    // Use a min-heap to keep track of top k frequent elements
    const minHeap = new MinHeap((a, b) => a[1] - b[1]); // Min-heap by frequency
    
    for (const [num, freq] of freqMap) {
        minHeap.add([num, freq]);
        if (minHeap.size() > k) {
            minHeap.poll(); // Remove the least frequent element
        }
    }
    
    // Extract the top k frequent elements
    return minHeap.toArray().map(pair => pair[0]);
}

// Min-Heap implementation
class MinHeap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }
    
    size() {
        return this.heap.length;
    }
    
    add(item) {
        this.heap.push(item);
        this.heapifyUp();
    }
    
    poll() {
        const root = this.heap[0];
        const end = this.heap.pop();
        if (this.size() > 0) {
            this.heap[0] = end;
            this.heapifyDown();
        }
        return root;
    }
    
    heapifyUp() {
        let index = this.size() - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.compare(this.heap[index], this.heap[parentIndex]) >= 0) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }
    
    heapifyDown() {
        let index = 0;
        while (true) {
            let leftIndex = 2 * index + 1;
            let rightIndex = 2 * index + 2;
            let smallest = index;
            
            if (leftIndex < this.size() && this.compare(this.heap[leftIndex], this.heap[smallest]) < 0) {
                smallest = leftIndex;
            }
            
            if (rightIndex < this.size() && this.compare(this.heap[rightIndex], this.heap[smallest]) < 0) {
                smallest = rightIndex;
            }
            
            if (smallest === index) break;
            
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
    
    toArray() {
        return this.heap;
    }
}

// Example Usage:
const nums = [1, 1, 1, 2, 2, 3, 4, 3, 1, 4, 3,2 ];
const k = 3;
console.log(topKFrequent(nums, k)); // Output: [1, 2]

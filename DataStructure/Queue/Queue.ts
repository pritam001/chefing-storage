export interface IQueue<T> {
    enqueue(T): T | null;
    dequeue(): T | null;
    getFront(): T;
    getRear(): T;
    readAsArray(): T[];
}

export class PlainQueue<T> implements IQueue<T> {
    private front: number;
    private rear: number;
    private size: number;
    private items: (T | null)[];
    private readonly capacity: number;

    constructor(capacity: number) {
        this.front = 0;
        this.rear = 0;
        this.size = 0;
        this.capacity = capacity;
        this.items = [];
        for(let i = 0; i < this.capacity; i++) {
            this.items.push(null);
        }
    }

    enqueue(t: T): T | null {
        if(this.size < this.capacity) {
            this.items.splice(this.rear, 1, t);
            this.rear = (this.rear - 1) % this.capacity;
            this.size++;
            return t;
        } else {
            return null;
        }
    }

    dequeue(): T | null {
        if(this.size > 0) {
            const item = this.items.splice(this.front, 1, null);
            this.front = (this.front - 1) % this.capacity;
            this.size--;
            return item[0];
        } else {
            return null;
        }
    }

    getFront(): T {
        return this.items[this.front];
    }

    getRear(): T {
        return this.items[this.rear];
    }

    readAsArray(): T[] {
        return this.items;
    }
}

export default {PlainQueue};
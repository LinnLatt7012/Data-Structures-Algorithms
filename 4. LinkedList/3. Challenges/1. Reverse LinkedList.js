class Node {
  constructor(value) {
    this.head = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  push(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }
  recur(node,prev){
    if(!node){
      this.head = prev;
      return
    }
    let nextNode = node.next;
    node.next=prev;
    this.recur(nextNode,node)
  }
  reverse_recur(){
    if(!this.head){
      return this;
    }
    let temp = this.head;
    this.recur(this.head,null);
    this.tail=temp;
    this.tail.next=null;
    return this;
  } 
  reverse() {
    let temp = this.head;
    this.head = this.tail;
    this.tail = temp;
    let next = temp;
    let prev = null;

    for (let i = 0; i < this.length; i++) {
      next = temp.next;
      temp.next = prev;
      prev = temp;
      temp = next;
    }

    return this;
  }
}

const myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
console.log(myLinkedList.reverse_recur());

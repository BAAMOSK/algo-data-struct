class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

}

const numbahs = new Node(25);
numbahs.insert(12);
numbahs.insert(32);
numbahs.insert(1);
numbahs.insert(6);

const result = JSON.stringify(numbahs, null, 4);
console.log(result);

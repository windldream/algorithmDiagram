function CircularLinkedList() {
    let Node = function(element) {
        this.element = element;
        this.next = null;
    };

    let length = 0;
    let head = null;

    this.insert = function(position, element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element), current = head, previous, index = 0;

            if (position === 0) {
                if (head === null) {
                    head = node;
                    node.next = head;
                } else {
                    node.next = current;
                    head = node;
                    while (current.next) {
                        current = current.next;
                    }
                    current.next = head;
                }
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                
                node.next = current;
                previous.next = node;
            }

            length++;

            return true;
        } else {
            return false;
        }
    };

    this.removeAt = function(position) {
        if (position >-1 && position < length) {
            let current = head, previous, index = 0;

            if (position === 0) {
                if (length === 1) {
                    head = null;
                } else {
                    let removed = head;
                    head = current.next;
                    while (current.next) {
                        current = current.next;
                    }
                    current.next = head;
                    current = removed;
                }
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }

            length--;

            return current.element;
        } else {
            return null;
        }
    }
}
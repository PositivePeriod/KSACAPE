export class Block {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type; // null, player, otherwise(item)
        this.status = null;
        this.player = null;
    }

    setStatus(status) {
        this.status = status;
    }
}
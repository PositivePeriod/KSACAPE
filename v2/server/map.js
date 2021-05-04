import { Block } from "./block";

export class GameMap {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.data = Array.from(Array(this.width), () => Array(this.height).fill(null));
        this.initMap();
    }

    initMap() {
        for (let i = 0; i < this.width; i++) {
            for (let j = 0; j < this.height; j++) {
                this.map[i][j] = new Block(i, j, null)
            }
        }
    }

    getBlock(x, y) {
        return this.data[x][y];
    }

    getPlayerPos()
}
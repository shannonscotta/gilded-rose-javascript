export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Legendary extends Item {
  updateQuality() {
    this.quality = 80;
  }
}

export class Ticket extends Item {
  updateQuality() {
    if (this.quality >= 50) return (this.quality = 50);
    
    switch (true) {
      case this.sellIn <= 0:
        this.quality = 0;
        break;
      case this.sellIn <= 5:
        this.quality += 3;
        break;
      case this.sellIn <= 10:
        this.quality += 2;
        break;
      default:
        this.quality++;
    }
    this.sellIn--;
  }
}

export class Cheese extends Item {
  updateQuality() {
    this.sellIn--;
    this.quality++;

    if (this.quality >= 50) this.quality = 50;
  }
}

export class Basic extends Item {
  updateQuality() {
    this.sellIn--;

    if (this.quality <= 0) return (this.quality = 0);

    this.sellIn < 0 ? (this.quality -= 2) : this.quality--;
  }
}

export class Conjured extends Item {
  updateQuality() {
    this.sellIn--;
    this.quality -= 2;

    if (this.sellIn < 0) this.quality -= 4;
  }
}

export let items = [];

items.push(new Basic("+5 Dexterity Vest", 10, 20));
items.push(new Cheese("Aged Brie", 2, 0));
items.push(new Basic("Elixir of the Mongoose", 5, 7));
items.push(new Legendary("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Ticket("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Conjured("Conjured Mana Cake", 3, 6));

export const updateQuality = () => {
  for (let item of items) {
    item.updateQuality();
  }
};

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
    this.sellIn--;

    if (this.quality > 50) this.quality = 50;

    if (this.sellIn <= 10) {
      this.quality += 2;
    } else if (this.sellIn <= 5) {
      this.quality += 3;
    } else if (this.sellIn === 0) {
      this.quality = 0;
    } else {
      this.quality++;
    }
  }
}

export class Cheese extends Item {
  updateQuality() {
    this.sellIn--;
    this.quality--;
  }
}

export class Basic extends Item {
  updateQuality() {
    this.sellIn--;
    this.quality--;

    if (this.sellIn < 0) this.quality -= 2;
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

// export const updateQuality = () => {
//   for (let item of items) {
//     if (
//       item.name != "Aged Brie" &&
//       item.name != "Backstage passes to a TAFKAL80ETC concert"
//     ) {
//       if (item.quality > 0) {
//         if (item.name != "Sulfuras, Hand of Ragnaros") {
//           item.quality = item.quality - 1;
//         }
//       }
//     } else {
//       if (item.quality < 50) {
//         console.log("item****", item);
//         item.quality = item.quality + 1;
//         if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
//           if (item.sellIn < 11) {
//             if (item.quality < 50) {
//               item.quality = item.quality + 1;
//             }
//           }
//           if (item.sellIn < 6) {
//             if (item.quality < 50) {
//               item.quality = item.quality + 1;
//             }
//           }
//         }
//       }
//     }
//     if (item.name != "Sulfuras, Hand of Ragnaros") {
//       item.sellIn = item.sellIn - 1;
//     }
//     if (item.sellIn < 0) {
//       if (item.name != "Aged Brie") {
//         if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
//           if (item.quality > 0) {
//             if (item.name != "Sulfuras, Hand of Ragnaros") {
//               item.quality = item.quality - 1;
//             }
//           }
//         } else {
//           item.quality = item.quality - item.quality;
//         }
//       } else {
//         if (item.quality < 50) {
//           item.quality = item.quality + 1;
//         }
//       }
//     }
//   }
// };

import { expect, describe, it } from "vitest";
import { Item, items, updateQuality } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Item("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });

  it("Once the `sellIn` days is less then zero,`quality`degrades twice as fast.", () => {
    const testItem = new Item("basic", -1, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(1);
  });

  it("The `quality` of an item is never negative.", () => {
    const testItem = new Item("basic", 1, 0);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
  });

  it("Aged Brie actually increases in `quality` the older it gets.", () => {
    const testItem = new Item("Aged Brie", 1, 1);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toEqual(2);
  });

  it("The quality of an item is never more than 50.", () => {
    const testItem = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      15,
      50
    );
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toEqual(50);
  });

  it("'Sulfuras, Hand of Ragnaros,' being a legendary item, never has to be sold nor does it decrease in quality.", () => {
    const testItem = new Item("Sulfuras, Hand of Ragnaros", 15, 80);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toEqual(15);
    expect(testItem.quality).toEqual(80);
  });

  it("'Backstage passes to a TAFKAL80ETC concert', quality increases by 2 when there are 10 days or less left before the concert.", () => {
    const testItem = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      10,
      10
    );
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toEqual(9);
    expect(testItem.quality).toEqual(12);
  });

  it("'Backstage passes to a TAFKAL80ETC concert', quality increases by 3 when there are 5 days or less left before the concert.", () => {
    const testItem = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      5,
      10
    );
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toEqual(4);
    expect(testItem.quality).toEqual(13);
  });

  it("'Backstage passes to a TAFKAL80ETC concert', quality drops to 0 after the concert.", () => {
    const testItem = new Item(
      "Backstage passes to a TAFKAL80ETC concert",
      0,
      10
    );
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toEqual(0);
  });



});




// it("'Conjured' items degrade in quality twice as fast as normal items.", () => {
//   const testItem = new Item(
//     "conjured",
//     4,
//     10
//   );
//   items.push(testItem);

//   updateQuality();

//   expect(testItem.quality).toEqual(8);
// });
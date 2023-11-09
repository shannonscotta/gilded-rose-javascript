import { expect, describe, it } from "vitest";

import {
  Basic,
  Legendary,
  Ticket,
  Cheese,
  Conjured,
  items,
  updateQuality,
} from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1.", () => {
    const testItem = new Basic("basic", 5, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });

  it("degrades `quality` twice as fast if `sellIn` days is less then zero.", () => {
    const testItem = new Basic("basic", -1, 3);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(1);
  });

  it("Ensures the `quality` of an item is never negative.", () => {
    const testItem = new Basic("basic", 1, 0);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
  });

  it("Increases Aged Brie in `quality` the older it gets.", () => {
    const testItem = new Cheese("Aged Brie", 1, 1);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toEqual(2);
  });

  it("Ensures the quality of an item is never more than 50.", () => {
    const testItem = new Ticket(
      "Backstage passes to a TAFKAL80ETC concert",
      15,
      50
    );
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toEqual(50);
  });

  it("Ensures legendary items never decrease in quality nor sell in value.", () => {
    const testItem = new Legendary("Sulfuras, Hand of Ragnaros", 15, 80);
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toEqual(15);
    expect(testItem.quality).toEqual(80);
  });

  it("Increases the ticket quality by 2 when there are 10 days or less left before the concert.", () => {
    const testItem = new Ticket(
      "Backstage passes to a TAFKAL80ETC concert",
      10,
      10
    );
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toEqual(9);
    expect(testItem.quality).toEqual(12);
  });

  it("Increases the ticket quality increases by 3 when there are 5 days or less left before the concert.", () => {
    const testItem = new Ticket(
      "Backstage passes to a TAFKAL80ETC concert",
      5,
      10
    );
    items.push(testItem);

    updateQuality();

    expect(testItem.sellIn).toEqual(4);
    expect(testItem.quality).toEqual(13);
  });

  it("Decreases ticket, quality to 0 after the concert.", () => {
    const testItem = new Ticket(
      "Backstage passes to a TAFKAL80ETC concert",
      0,
      10
    );
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toEqual(0);
  });

  it("Degrades 'Conjured' item quality twice as fast as normal items.", () => {
    const testItem = new Conjured("conjured", 4, 10);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toEqual(8);
  });
});

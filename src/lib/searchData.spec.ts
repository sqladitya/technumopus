import { describe, it, expect } from "vitest";
import {
  searchItems,
  searchData,
  getItemsByCategory,
  getAllCategories,
} from "./searchData";

describe("searchData", () => {
  it("should return all search items", () => {
    expect(searchData).toBeDefined();
    expect(searchData.length).toBeGreaterThan(0);
  });

  it("should have required properties for each item", () => {
    searchData.forEach((item) => {
      expect(item).toHaveProperty("id");
      expect(item).toHaveProperty("title");
      expect(item).toHaveProperty("description");
      expect(item).toHaveProperty("href");
      expect(item).toHaveProperty("category");
      expect(item).toHaveProperty("icon");
    });
  });

  it("should search items by title", () => {
    const results = searchItems("About");
    expect(results.length).toBeGreaterThan(0);
    expect(results[0].title).toContain("About");
  });

  it("should search items by description", () => {
    const results = searchItems("cloud");
    expect(results.length).toBeGreaterThan(0);
    const hasCloudInDescription = results.some((item) =>
      item.description.toLowerCase().includes("cloud"),
    );
    expect(hasCloudInDescription).toBe(true);
  });

  it("should search items by keywords", () => {
    const results = searchItems("sap");
    expect(results.length).toBeGreaterThan(0);
    const hasSAPItem = results.some((item) =>
      item.title.toLowerCase().includes("sap"),
    );
    expect(hasSAPItem).toBe(true);
  });

  it("should return empty array for empty query", () => {
    const results = searchItems("");
    expect(results).toEqual([]);
  });

  it("should return items by category", () => {
    const services = getItemsByCategory("Services");
    expect(services.length).toBeGreaterThan(0);
    services.forEach((item) => {
      expect(item.category).toBe("Services");
    });
  });

  it("should return all categories", () => {
    const categories = getAllCategories();
    expect(categories).toContain("Pages");
    expect(categories).toContain("Company");
    expect(categories).toContain("Services");
    expect(categories).toContain("Partners");
  });

  it("should prioritize title matches in search results", () => {
    const results = searchItems("home");
    // The item with "Home" in the title should come first
    expect(results[0].title.toLowerCase()).toContain("home");
  });

  it("should handle case-insensitive searches", () => {
    const lowerCase = searchItems("services");
    const upperCase = searchItems("SERVICES");
    const mixedCase = searchItems("SeRvIcEs");

    expect(lowerCase.length).toBe(upperCase.length);
    expect(lowerCase.length).toBe(mixedCase.length);
  });
});

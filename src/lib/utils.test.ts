import { describe, expect, it } from "vitest"
import { cn } from "./utils"

describe("cn", () => {
  it("keeps non-conflicting classes", () => {
    expect(cn("text-primary", "font-bold")).toBe("text-primary font-bold")
  })

  it("merges conflicting tailwind classes, last one wins", () => {
    expect(cn("px-4", "px-6")).toBe("px-6")
  })

  it("ignores falsy values", () => {
    const condition = false
    expect(cn("a", condition && "b", undefined, "c")).toBe("a c")
  })
})

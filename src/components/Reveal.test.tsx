import { render } from "@testing-library/react"
import { act } from "react"
import { beforeEach, expect, it, vi } from "vitest"
import { Reveal } from "./Reveal"

let observerCallback: IntersectionObserverCallback | null = null

class ObserverStub {
  root: Element | null = null
  rootMargin = ""
  thresholds: ReadonlyArray<number> = []

  constructor(callback: IntersectionObserverCallback) {
    observerCallback = callback
  }

  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

beforeEach(() => {
  observerCallback = null
  vi.stubGlobal("IntersectionObserver", ObserverStub)
})

it("starts hidden", () => {
  const { container } = render(<Reveal>content</Reveal>)

  const wrapper = container.firstElementChild
  expect(wrapper?.className).toContain("reveal")
  expect(wrapper?.className).not.toContain("reveal-visible")
})

it("becomes visible when intersecting", async () => {
  const { container } = render(<Reveal>content</Reveal>)

  await act(async () => {
    observerCallback?.(
      [{ isIntersecting: true } as IntersectionObserverEntry],
      {} as IntersectionObserver,
    )
  })

  const wrapper = container.firstElementChild
  expect(wrapper?.className).toContain("reveal-visible")
})

it("stays hidden when not intersecting", async () => {
  const { container } = render(<Reveal>content</Reveal>)

  await act(async () => {
    observerCallback?.(
      [{ isIntersecting: false } as IntersectionObserverEntry],
      {} as IntersectionObserver,
    )
  })

  const wrapper = container.firstElementChild
  expect(wrapper?.className).not.toContain("reveal-visible")
})

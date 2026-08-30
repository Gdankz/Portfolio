import "@testing-library/jest-dom/vitest"
import { vi } from "vitest"

class IntersectionObserverStub implements IntersectionObserver {
  readonly root: Element | null = null
  readonly rootMargin: string = ""
  readonly scrollMargin: string = ""
  readonly thresholds: ReadonlyArray<number> = []

  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
  takeRecords(): IntersectionObserverEntry[] {
    return []
  }
}

if (!("IntersectionObserver" in globalThis)) {
  vi.stubGlobal("IntersectionObserver", IntersectionObserverStub)
}

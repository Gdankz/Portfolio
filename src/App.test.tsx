import { render, screen } from "@testing-library/react"
import { expect, it } from "vitest"
import App from "./App"

it("renders the home page", () => {
  render(<App />)

  expect(screen.getByText("Hi, I'm")).toBeInTheDocument()
  expect(screen.getByRole("heading", { level: 2, name: /about/i })).toBeInTheDocument()
})

it("renders the not found page for unknown routes", () => {
  window.history.pushState({}, "", "/does-not-exist")
  render(<App />)

  expect(screen.getByText("Not Found")).toBeInTheDocument()
})

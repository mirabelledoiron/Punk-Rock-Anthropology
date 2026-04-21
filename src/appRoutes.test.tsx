import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AppRoutes } from "./appRoutes";

function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <AppRoutes />
    </MemoryRouter>
  );
}

describe("AppRoutes", () => {
  it("renders home", () => {
    renderAt("/");
    expect(screen.getByRole("heading", { name: /PUNK ROCK/i })).toBeInTheDocument();
  });

  it("renders search page", () => {
    renderAt("/search");
    expect(screen.getByRole("heading", { name: /search the archive/i })).toBeInTheDocument();
  });

  it("renders timeline", () => {
    renderAt("/timeline");
    expect(screen.getByRole("heading", { name: /punk timeline/i })).toBeInTheDocument();
  });

  it("renders 404 for unknown paths", () => {
    renderAt("/this-route-does-not-exist");
    expect(screen.getByRole("heading", { name: "404" })).toBeInTheDocument();
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});

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

  it("renders search page", async () => {
    renderAt("/search");
    expect(
      await screen.findByRole("heading", { name: /search the archive/i })
    ).toBeInTheDocument();
  });

  it("renders timeline", async () => {
    renderAt("/timeline");
    expect(
      await screen.findByRole("heading", { name: /punk timeline/i })
    ).toBeInTheDocument();
  });

  it("renders 404 for unknown paths", async () => {
    renderAt("/this-route-does-not-exist");
    expect(await screen.findByRole("heading", { name: "404" })).toBeInTheDocument();
    expect(screen.getByText(/page not found/i)).toBeInTheDocument();
  });
});

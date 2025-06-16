import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Hero } from "@/components/sections/Hero/Hero";
import { ArticlesContext } from "@/context/ArticlesContext";

jest.mock("../../../../src/components/sections/Searchbar/Searchbar", () => ({
   Searchbar: () => <div data-testid="mock-searchbar" />,
}));

describe("Hero component", () => {
   const setup = () => {
      const handleClearSearch = jest.fn();
      render(
         <ArticlesContext.Provider value={{ handleClearSearch } as any}>
            <Hero />
         </ArticlesContext.Provider>
      );
      return { handleClearSearch };
   };

   it("renders pretitle, title and description", () => {
      setup();
      expect(
         screen.getByText(/Mistura de arte, música e estilo de vida\./i)
      ).toBeInTheDocument();

      expect(
         screen.getByRole("heading", {
            level: 1,
            name: /Descubra Paixões\s*& Sabores/i,
         })
      ).toBeInTheDocument();

      expect(
         screen.getByText(
            /Explore experiências incríveis e compartilhe o que te inspira\./i
         )
      ).toBeInTheDocument();
   });

   it("renders the Searchbar and clear button", () => {
      const { handleClearSearch } = setup();

      expect(screen.getByTestId("mock-searchbar")).toBeInTheDocument();

      const btn = screen.getByRole("button", { name: /limpar as buscas/i });
      expect(btn).toBeInTheDocument();

      fireEvent.click(btn);
      expect(handleClearSearch).toHaveBeenCalledTimes(1);
   });

   it("renders two decorative background divs", () => {
      setup();
      const bgDivs = document.querySelectorAll("div.absolute");
      expect(bgDivs.length).toBe(2);
   });
});

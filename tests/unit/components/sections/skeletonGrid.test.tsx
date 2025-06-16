import React from "react";
import { render, screen, within } from "@testing-library/react";
import { SkeletonGrid } from "@/components/sections/SkeletonGrid/SkeletonGrid";

jest.mock("../../../../src/components/ui/skeleton", () => ({
   Skeleton: jest.fn(({ className }: { className: string }) => (
      <div data-testid="skeleton-mock" className={className} />
   )),
}));

describe("SkeletonGrid", () => {
   it("should render 12 skeleton items by default", () => {
      render(<SkeletonGrid />);

      const statusElement = screen.getByRole("status", {
         name: "Carregando conteúdos",
      });
      expect(statusElement).toBeInTheDocument();
      expect(statusElement).toHaveAttribute("aria-busy", "true");
      expect(statusElement).toHaveAttribute(
         "aria-label",
         "Carregando conteúdos"
      );

      const listItems = screen.getAllByRole("listitem");
      expect(listItems).toHaveLength(12);

      listItems.forEach((item) => {
         const skeletonsInsideItem =
            within(item).getAllByTestId("skeleton-mock");
         expect(skeletonsInsideItem.length).toBeGreaterThan(0);
      });
   });

   it("should render the specified number of skeleton items when itemCount is provided", () => {
      const customItemCount = 5;

      render(<SkeletonGrid itemCount={customItemCount} />);

      const statusElement = screen.getByRole("status", {
         name: "Carregando conteúdos",
      });
      expect(statusElement).toBeInTheDocument();

      const listItems = screen.getAllByRole("listitem");
      expect(listItems).toHaveLength(customItemCount);
   });

   it("should apply the correct ARIA attributes for accessibility", () => {
      render(<SkeletonGrid />);

      const statusElement = screen.getByRole("status");
      expect(statusElement).toHaveAttribute("aria-busy", "true");
      expect(statusElement).toHaveAttribute(
         "aria-label",
         "Carregando conteúdos"
      );
   });

   it("should render the correct classes for the main container", () => {
      render(<SkeletonGrid />);

      const container = screen.getByRole("status");
      expect(container).toHaveClass(
         "w-full grid grid-cols-1 xl:grid-cols-4 gap-8 mb-32"
      );
   });

   it("should render the correct classes for each list item", () => {
      render(<SkeletonGrid itemCount={1} />);

      const listItem = screen.getByRole("listitem");
      expect(listItem).toHaveClass("flex flex-col space-y-3");
   });

   it("should render the correct classes for the inner Skeleton components", () => {
      render(<SkeletonGrid itemCount={1} />);

      const skeletonMocks = screen.getAllByTestId("skeleton-mock");
      expect(skeletonMocks[0]).toHaveClass("h-56 rounded-xl");
      expect(skeletonMocks[1]).toHaveClass("h-4 w-full");
      expect(skeletonMocks[2]).toHaveClass("h-4 w-48");
   });
});

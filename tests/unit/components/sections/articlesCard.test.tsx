import React from "react";
import { render, screen } from "@testing-library/react";
import { ArticlesCard } from "@/components/sections/Articles/ArticlesCard";
import mockDb from "../../../../utils/mock/db.json";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

jest.mock("next/image", () => ({
   __esModule: true,
   default: function Img(props: any) {
      return <img {...props} />;
   },
}));

jest.mock("react-icons/bi", () => ({
   BiCalendar: () => <span data-testid="icon-calendar" />,
   BiTime: () => <span data-testid="icon-time" />,
   BiUser: () => <span data-testid="icon-user" />,
}));

describe("ArticlesCard component", () => {
   const article = mockDb.articles[0];

   beforeEach(() => {
      render(<ArticlesCard article={article} />);
   });

   it("renders the image with correct src and alt", () => {
      const img = screen.getByRole("img", { name: article.title });
      expect(img).toHaveAttribute("src", article.img_sm);
      expect(img).toHaveAttribute("alt", article.title);
   });

   it("displays the article type badge", () => {
      const badge = screen.getByText(article.type);
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass("uppercase");
   });

   it("displays the article hour", () => {
      const hour = screen.getByText(article.hour);
      expect(hour).toBeInTheDocument();
   });

   it("renders the article title", () => {
      const title = screen.getByRole("heading", {
         level: 4,
         name: article.title,
      });
      expect(title).toBeInTheDocument();
   });

   it("shows the author name", () => {
      const authorName = screen.getByText(article.author[0].name);
      expect(authorName).toBeInTheDocument();
   });

   it("includes react-icons placeholders", () => {
      expect(screen.getByTestId("icon-calendar")).toBeInTheDocument();
      expect(screen.getByTestId("icon-time")).toBeInTheDocument();
      expect(screen.getByTestId("icon-user")).toBeInTheDocument();
   });

   it("formats and displays the date correctly", () => {
      const dateString = article.date;
      const expected = format(parseISO(dateString), "dd 'de' MMM, yyyy", {
         locale: ptBR,
      });
      const timeEl = screen.getByText(expected);
      expect(timeEl).toBeInTheDocument();
      expect(timeEl).toHaveAttribute("dateTime", expected);
   });

   it("displays placeholder when date is empty", () => {
      const customArticle = { ...article, date: "" };
      render(<ArticlesCard article={customArticle} />);
      const timeEl = screen.getByText("Data");
      expect(timeEl).toBeInTheDocument();
      expect(timeEl).toHaveAttribute("dateTime", "Data");
   });
});

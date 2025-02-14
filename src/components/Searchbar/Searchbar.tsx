import React, { useState } from "react";
import { SearchIconSvg } from "../Svgs";
import { Input } from "../Input";
import { Button } from "../Button";

export const Searchbar: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-[90%] flex gap-x-2 px-3 rounded-full bg-white items-center py-2"
      >
        <Button type="submit">
          <SearchIconSvg />
        </Button>
        <Input
          value={search}
          placeholder="Search Here..."
          type="search"
          onChange={(e) => setSearch(e.target.value)}
          className="w-[90%] focus:outline-none"
        />
      </form>
    </>
  );
};

export default Searchbar;

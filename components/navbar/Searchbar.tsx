"use client";

import { Input } from "../ui/input";

import _ from "lodash";

export const Searchbar = () => {
  return <Input onChange={handleOnChange} className="w-80" />;
};

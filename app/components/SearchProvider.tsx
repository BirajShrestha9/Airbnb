"use client";
import { createContext, useState, useContext } from "react";
interface SearchContextType {
  searchInput: string;
  setSearchInput: (value: string) => void;
  startDate: Date;
  setStartDate: (value: Date) => void;
  endDate: Date;
  setEndDate: (value: Date) => void;
  noOfGuests: number;
  setNoOfGuests: (value: number) => void;
  searchSucceful: boolean;
  setSearchSuccessful: (value: boolean) => void;
}
export const SearchContext = createContext<SearchContextType>({
  searchInput: "",
  setSearchInput: () => {},
  startDate: new Date(),
  setStartDate: () => {},
  endDate: new Date(),
  setEndDate: () => {},
  noOfGuests: 0,
  setNoOfGuests: () => {},
  searchSucceful: false,
  setSearchSuccessful: () => {},
});

interface SearchProviderProps {
  children: React.ReactNode;
}
export function SearchProvider({ children }: SearchProviderProps) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const [searchSucceful, setSearchSuccessful] = useState(false);

  return (
    <SearchContext.Provider
      value={{
        searchInput,
        setSearchInput,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        noOfGuests,
        setNoOfGuests,
        searchSucceful,
        setSearchSuccessful,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  console.log("context:", context);
  if (!context) {
    console.log("error");
    throw new Error("There is error");
  }
  return context;
}

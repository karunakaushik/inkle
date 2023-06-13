import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SearchResults = () => {
  const { key } = useParams();
  const mails = useSelector((state) => state.mails);

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchSearchResults = async () => {
      const update = mails.filter((mail) =>
        mail.subject?.toLowerCase().includes(key?.toLowerCase())
      );
      setSearchResults(update);
    };

    fetchSearchResults();
  }, [mails, key]);

  return (
    <div>
      <h2>Search Results for "{key}"</h2>
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;

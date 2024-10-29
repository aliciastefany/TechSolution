import React, { useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";

function OrdemServico() {
  const [dataSearch, setDataSearch] = useState("");
  const [dataFilter, setDataFilter] = useState("");

  function handlePropsSearch(user) {
    let newSearchData = dataSearch;

    newSearchData = user;
    setDataSearch(newSearchData);
  }

  function handlePropsFilter(user) {
    let newFilterData = dataFilter;

    newFilterData = user;
    setDataFilter(newFilterData);
  }
  return (
    <div>
      <Header usePropsSearch={handlePropsSearch} usePropsFilter={handlePropsFilter}/>
      <Content search={dataSearch} filter={dataFilter} />
    </div>
  );
}

export default OrdemServico;
